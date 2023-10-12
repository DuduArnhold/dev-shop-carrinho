export function Cart(){
    return(
        <div className="w-full max-w-7xl mx-auto">
            <h1 className="font-medium text-2xl text-center my-6">
               Meu Carrinho
            </h1>


            <section className="flex items-center justify-between border-b-2 border-gray-300">
                
                
                <img className="w-28" src="https://images.tcdn.com.br/img/img_prod/167552/fone_de_ouvido_apple_airpods_pro_mwp22be_a_13305_1_49b712f1e0c3353c688e35bd6034170e.jpg" alt="imagem do produto" />

                <strong>Preço: R$1000 </strong>

                <div className="flex items-center justify-center gap-3">
                    <button className="bg-slate-600 px-2 text-white font-medium flex items-center justfy-center"> - </button>
                    <button className=""> 1 </button>
                    <button className="bg-slate-600 px-2 text-white font-medium flex items-center justfy-center"> + </button>
                </div>
                <strong className="float-right"> SubTotal: R$ 1000 </strong>
            
            
            
            </section>

            <p className="font-bold mt-4">Total: R$ 1000</p>



        </div>

    )

}