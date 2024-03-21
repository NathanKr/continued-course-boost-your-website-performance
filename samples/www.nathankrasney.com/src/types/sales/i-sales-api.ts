interface ISalesApi{
    isSalesDay : boolean;
    relativeUrlPerSaleDay : string;
    expireInMs?: number,// ---- relevant if is sales day 
}

export default ISalesApi;