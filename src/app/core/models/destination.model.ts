/** A destination that can be featured on the site and built into a package. */
export interface Destination {
  name: string;
  region: string;
  desc: string;
  price: number;
  grad: [string, string, string];
  /** Silhouette key rendered by `<app-scene>`. */
  line: string;
  spots: string[];
}
