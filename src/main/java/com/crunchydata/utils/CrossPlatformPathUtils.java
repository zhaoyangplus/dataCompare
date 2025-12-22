package com.crunchydata.utils;

import java.io.File;
import java.io.FileNotFoundException;
import java.net.URL;
import java.net.URLDecoder;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;

public class CrossPlatformPathUtils {
    // 操作系统类型标识
    private static final String OS_NAME = System.getProperty("os.name").toLowerCase();
    private static final boolean IS_WINDOWS = OS_NAME.contains("win");
    private static final boolean IS_LINUX = OS_NAME.contains("nux") || OS_NAME.contains("nix");
    // 开发环境标识（通过类路径是否包含"target/classes"判断）
    private static final boolean IS_DEV_ENV = isDevEnvironment();

    // 私有构造函数，禁止实例化
    private CrossPlatformPathUtils() {}

    /**
     * 判断是否为开发环境（IDE中运行，未打包为JAR）
     */
    private static boolean isDevEnvironment() {
        String classPath = System.getProperty("java.class.path");
        // 开发环境class文件通常在target/classes或bin目录
        return classPath.contains("target/classes") || classPath.contains("bin/classes");
    }

    /**
     * 获取应用部署目录下的conf/meta根目录（适配开发/生产环境）
     * @param referenceClass 参考类（用于定位路径）
     * @return meta目录的绝对路径（以系统分隔符结尾）
     * @throws Exception 路径获取失败时抛出异常
     */
    public static String getMetaBaseDir(Class<?> referenceClass) throws Exception {
        // 开发环境特殊处理
        if (IS_DEV_ENV) {
            return getDevMetaBaseDir(referenceClass);
        }
        // 生产环境（JAR部署）处理逻辑
        return getProdMetaBaseDir(referenceClass);
    }

    /**
     * 开发环境（IDE运行）的meta路径计算
     */
    private static String getDevMetaBaseDir(Class<?> referenceClass) throws Exception {
        // 1. 获取开发环境class文件的根目录（如target/classes/）
        String className = referenceClass.getName().replace(".", "/") + ".class";
        URL url = referenceClass.getClassLoader().getResource(className);
        if (url == null) {
            throw new RuntimeException("开发环境：无法获取类资源路径");
        }

        String classFilePath = url.getPath();
        classFilePath = URLDecoder.decode(classFilePath, StandardCharsets.UTF_8.name());

        // 2. 处理Windows路径前缀（如去掉开头的"/"）
        if (IS_WINDOWS && classFilePath.startsWith("/")) {
            classFilePath = classFilePath.substring(1);
        }

        // 3. 定位到target/classes目录（开发环境class根目录）
        // 路径格式：.../target/classes/com/xxx/XXX.class → 截取到target/classes/
        File classFile = new File(classFilePath);
        String classRootDir = classFile.getParentFile().getAbsolutePath();
        // 向上追溯到target/classes（根据包路径层级动态调整）
        while (!classRootDir.endsWith("classes") && !classRootDir.endsWith("classes" + File.separator)) {
            File parentDir = new File(classRootDir).getParentFile();
            if (parentDir == null) {
                throw new RuntimeException("开发环境：未找到classes根目录");
            }
            classRootDir = parentDir.getAbsolutePath();
        }

        // 4. 开发环境meta目录直接在classes目录下（/target/classes/meta/）
        String metaBasePath = classRootDir + File.separator + "meta" + File.separator;
        File metaBaseDir = new File(metaBasePath).getCanonicalFile();

        // 5. 检查目录权限
        checkWritePermission(metaBaseDir);

        return metaBaseDir.getAbsolutePath() + File.separator;
    }

    /**
     * 生产环境（JAR部署）的meta路径计算
     */
    private static String getProdMetaBaseDir(Class<?> referenceClass) throws Exception {
        // 1. 获取JAR包路径（处理URL协议前缀）
        String className = referenceClass.getName().replace(".", "/") + ".class";
        URL url = referenceClass.getClassLoader().getResource(className);
        if (url == null) {
            throw new RuntimeException("生产环境：无法获取类资源路径");
        }

        // 关键修复：处理URL的协议前缀（file:）
        String jarUrl = url.toString(); // 先转为字符串处理，避免getPath()的协议问题
        if (!jarUrl.startsWith("jar:file:")) {
            throw new RuntimeException("生产环境：类不在JAR包中，路径=" + jarUrl);
        }

        // 截取JAR包路径（格式：jar:file:/xxx/xxx.jar!/com/... → /xxx/xxx.jar）
        String jarPath = jarUrl.substring("jar:file:".length());
        jarPath = jarPath.substring(0, jarPath.indexOf("!")); // 去掉内部类路径

        // 解码URL特殊字符（如空格、中文编码）
        jarPath = URLDecoder.decode(jarPath, StandardCharsets.UTF_8.name());

        // 2. 处理Linux路径（确保没有多余的前缀）
        if (IS_LINUX && jarPath.startsWith("//")) { // 有些环境会多一个斜杠
            jarPath = jarPath.substring(1);
        }

        // 3. 验证JAR包是否存在
        File jarFile = new File(jarPath);
        if (!jarFile.exists()) {
            throw new FileNotFoundException("生产环境：JAR包不存在：" + jarPath + "（请检查部署路径是否正确）");
        }

        // 4. 计算lib目录及meta目录（lib/../conf/meta/）
        String libDir = jarFile.getParent();
        if (libDir == null) {
            throw new RuntimeException("生产环境：无法获取JAR包所在目录");
        }

        // 拼接conf/meta路径（使用系统分隔符）
        String metaBasePath = libDir + File.separator + ".." + File.separator
                + "conf" + File.separator + "meta" + File.separator;
        File metaBaseDir = new File(metaBasePath).getCanonicalFile();

        // 5. 检查目录权限
        checkWritePermission(metaBaseDir);

        return metaBaseDir.getAbsolutePath() + File.separator;
    }

    /**
     * 检查目录写入权限（通用方法）
     */
    private static void checkWritePermission(File dir) throws SecurityException {
        if (!Files.isWritable(Paths.get(dir.getAbsolutePath()))) {
            String permissionCmd = IS_WINDOWS
                    ? "请检查目录权限或使用管理员权限运行"
                    : "请执行 chmod -R 755 " + dir.getAbsolutePath();

            throw new SecurityException("目录无写入权限：" + dir.getAbsolutePath()
                    + "，" + permissionCmd);
        }
    }

    // 其他方法（createDirIfNotExists、sanitizeFileName等保持不变）
    public static void createDirIfNotExists(String dirPath) throws Exception {
        File dir = new File(dirPath);
        if (!dir.exists() && !dir.mkdirs()) {
            throw new Exception("无法创建目录：" + dirPath);
        }
    }

    public static String sanitizeFileName(String fileName) {
        if (IS_WINDOWS) {
            return fileName.replaceAll("[\\\\/:*?\"<>|]", "_");
        } else {
            return fileName.replaceAll("/", "_");
        }
    }

    public static boolean isWindows() {
        return IS_WINDOWS;
    }

    public static boolean isLinux() {
        return IS_LINUX;
    }

    public static boolean isDevEnvironmentPublic() {
        return IS_DEV_ENV;
    }
}
