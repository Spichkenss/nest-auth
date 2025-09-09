export interface IUseCase<TResponse, TRequest> {
  execute(value: TRequest): Promise<TResponse>;
}
