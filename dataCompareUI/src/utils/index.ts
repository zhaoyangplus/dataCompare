/** 将时间解析成字符串 */
export function parseTime(time: number | string | Date | null, cFormat?: string): string | null {
  // 如果没有参数传入，直接返回 null
  if (arguments.length === 0) {
    return null;
  }

  // 默认格式
  const format: string = cFormat || '{y}-{m}-{d} {h}:{i}:{s}';
  let date: Date;

  // 使用局部变量处理 time
  let processedTime: number | string | Date | null = time;

  if (typeof processedTime === 'object' && processedTime instanceof Date) {
    date = processedTime; // 如果已经是 Date 对象，直接赋值
  } else {
    if (typeof processedTime === 'string' && /^[0-9]+$/.test(processedTime)) {
      processedTime = Number.parseInt(processedTime, 10); // 将字符串形式的时间戳转换为数字
    }
    if (typeof processedTime === 'number' && processedTime.toString().length === 10) {
      processedTime *= 1000; // 将秒级时间戳转换为毫秒级
    }
    date = new Date(processedTime as number | string); // 构造 Date 对象
  }

  // 格式化对象
  const formatObj: Record<string, number> = {
    y: date.getFullYear(),
    m: date.getMonth() + 1,
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay()
  };

  // 格式化时间字符串
  const timeStr: string = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result: string, key: string): string => {
    let value: number | string = formatObj[key];

    // 处理星期几
    if (key === 'a') {
      const weekdays: string[] = ['日', '一', '二', '三', '四', '五', '六'];
      return weekdays[value as number];
    }

    // 补零处理
    if (result.length > 0 && typeof value === 'number' && value < 10) {
      value = `0${value}`;
    }

    return value?.toString() || '0';
  });

  return timeStr;
}
