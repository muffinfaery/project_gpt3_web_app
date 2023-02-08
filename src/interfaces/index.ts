export type Blog = {
  id: string,
  title: string,
  imageUrl: string,
  description: string,
  body: string,
  date: string
}

export type Feature = {
  id: string,
  title: string, 
  text: string
}

  
export type ResponseError = {
    message: string
}