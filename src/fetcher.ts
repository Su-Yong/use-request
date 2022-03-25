type Request = () => Promise<unknown>;

class RequestPool {
  private static pool: Request[];

  static push(request: Request) {
    this.pool.push(request);
  }

  private static fetch () {
    const [firstRequest] = this.pool;


  }
}

export default RequestPool;
