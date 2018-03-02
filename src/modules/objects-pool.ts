export class Pool<T>{
  private _pool: Set<T>;

  constructor() {
    this._pool = new Set<T>();
  }

  public _register(item: any) {
    try {
      this._pool.add(item);
    } catch (err) {
      //To do
    }
  }

  public _unregister(item: any) {
    try {
      this._pool.delete(item);
    } catch (err) {
      //To do
    }
  }

  public _has(itemKey) {
    return this._pool.has(itemKey)
  }
}
