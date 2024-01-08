export interface SelinaCountries{
  countryName:string,
  showSubmenu:boolean,
  locations:Array<SelinaLocation>
}

export interface SelinaLocation{
  id:string
  name:string,
  previewImage:string;
  content:{
    email:string
    description:string,
    phones:Array<any>
  }
 }


export interface LocationEvent{
  name:string,
  startDate:string,
  startTime:string,
  endDate:string,
  endTime:string,
  startTs:number,
  endTs:number,
  content:{
    title:string
    longDescription:string,
    mainImage:string
  }
}
