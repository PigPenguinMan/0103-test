const MainPage = ()=>{
    const product = ([
        {
            name : '옷1',
            img :  '옷1.png'
        },
        {
            name : '옷2',
            img :  '옷2.png'
        },
        {
            name : '옷3',
            img :  '옷3.png'
        }
    ])
    return(
        
        <div style={{marginTop:'100px'}}>
            <a className="more" href="">더보기</a>
            <div className="main">
            {
                product.map((a)=>(
                    <div className="product">
                        <img src={require(`../img/${a.img}`) } style={{width:'400px' , height:'300px'}} />
                        <p>{a.name}</p>
                    </div>
                ))
            }

            </div>
        </div>
    )
}
export default MainPage;