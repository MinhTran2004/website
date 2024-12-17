declare module '*.svg' {
    const content: string;  // SVG sẽ được xử lý như một chuỗi URL
    export default content;
  }