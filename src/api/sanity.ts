export interface SanityBlockData {

}

export interface SanityBlogData {
  title: string;
  author: string;
  date: string;
  menuphoto: SanityImageData;
  body: any;
  type: SanityData;
  of: [{type: SanityData}];
  path: string;
  onClick: boolean;
}

export interface SanityImageData {
  asset: {
    _ref: string;
    _type: string;
  };
  _type: string;
}

export interface SanitySlugData {
  auto: boolean;
  current: string;
}

export interface SanityData {
  _createdAt: Date;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: Date;
}
