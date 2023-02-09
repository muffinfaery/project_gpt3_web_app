export type IBlog = {
  id: string,
  title: string,
  imageUrl: string,
  description: string,
  body: string,
  date: string
}

export type IFeature = {
  id: string,
  title: string, 
  text: string
}

  
export type IResponseError = {
    message: string
}