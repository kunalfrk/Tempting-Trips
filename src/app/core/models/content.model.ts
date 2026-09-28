/** A service offered on the marketing page. */
export interface Service {
  icon: string;
  title: string;
  desc: string;
  feats: string[];
}

/** A trust or safety assurance tile. */
export interface Trust {
  icon: string;
  t: string;
  d: string;
}

/** A customer testimonial. */
export interface Testimonial {
  name: string;
  role: string;
  trips: number;
  r: number;
  text: string;
}

/** A travel-guide article teaser. */
export interface BlogPost {
  title: string;
  cat: string;
  time: string;
  author: string;
  grad: [string, string];
}

/** A help-centre question and answer. */
export interface Faq {
  q: string;
  a: string;
}
