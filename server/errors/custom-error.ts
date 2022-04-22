class CustomError extends Error {
  status: number;

  message: string;

  constructor(message: string, status: number) {
    super(message);
    this.message = message;
    this.status = status;
  }
}

export default CustomError;
