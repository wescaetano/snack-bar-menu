import React from 'react';
import { Menu, Utensils, Coffee } from 'lucide-react';

interface MenuItem {
  name: string;
  description: string;
  price: number;
}

function App() {
  const hotdogs: MenuItem[] = [
    {
      name: "Hot Dog Normal",
      description: "pão, maionese, vinagrete, salsicha, batata, ketchup e mostarda",
      price: 10.00
    },
    {
      name: "Hot Dog Duplo",
      description: "pão, maionese, vinagrete, duas salsichas, batata, ketchup e mostarda",
      price: 11.00
    },
    {
      name: "Hot Dog Catupiry",
      description: "pão, maionese, vinagrete, salsicha, batata, ketchup, mostarda e catupiry",
      price: 11.00
    },
    {
      name: "Hot Dog Cheddar",
      description: "pão, maionese, vinagrete, salsicha, batata, ketchup, mostarda e cheddar",
      price: 11.00
    },
    {
      name: "Hot Dog Especial",
      description: "pão, maionese, vinagrete, duas salsichas, batata, ketchup, mostarda e catupiry",
      price: 13.00
    },
    {
      name: "Hot Dog Bacon",
      description: "pão, maionese, vinagrete, salsicha, batata, ketchup, mostarda e bacon",
      price: 14.00
    },
    {
      name: "Hot Dog Frango",
      description: "pão, maionese, vinagrete, salsicha, batata, ketchup, mostarda e frango",
      price: 14.00
    },
    {
      name: "Hot Dog Calabresa",
      description: "pão, maionese, vinagrete, salsicha, batata, ketchup, mostarda e calabresa",
      price: 14.00
    }
  ];

  const lanches: MenuItem[] = [
    {
      name: "Misto Quente",
      description: "Pão, maionese, presunto e queijo",
      price: 11.00
    },
    {
      name: "Bauru",
      description: "Pão, maionese, tomate, presunto e queijo",
      price: 12.00
    },
    {
      name: "Americano",
      description: "Pão, maionese, tomate, ovo, alface, presunto e queijo",
      price: 15.00
    },
    {
      name: "X-Burguer",
      description: "Pão, maionese, hambúrguer e queijo",
      price: 12.00
    },
    {
      name: "X-Salada",
      description: "Pão, maionese, tomate, alface, hambúrguer e queijo",
      price: 14.00
    },
    {
      name: "X-Milho",
      description: "Pão, maionese, tomate, milho, hambúrguer e queijo",
      price: 15.00
    },
    {
      name: "X-Egg",
      description: "Pão, maionese, tomate, ovo, hambúrguer e queijo",
      price: 15.00
    },
    {
      name: "X-Bacon",
      description: "Pão, maionese, tomate, bacon, hambúrguer e queijo",
      price: 16.00
    },
    {
      name: "X-Calabresa",
      description: "Pão, maionese, tomate, calabresa, hambúrguer e queijo",
      price: 16.00
    },
    {
      name: "X-Frango",
      description: "Pão, maionese, tomate, frango e queijo",
      price: 16.00
    },
    {
      name: "Lombo",
      description: "Pão, maionese, tomate, lombo e queijo",
      price: 17.00
    },
    {
      name: "Churrasco",
      description: "Pão, maionese, churrasco e queijo",
      price: 20.00
    },
    {
      name: "X-Tudo",
      description: "Pão, maionese, tomate, bacon, calabresa, churrasco, lombo, frango, hambúrguer, ovo, alface e queijo",
      price: 28.00
    },
    
  ];

  const Acrescimos: MenuItem[] = [
    {
      name: "Lombo",
      description: "Porção de lombo",
      price: 5.00
    },
    {
      name: "Churrasco",
      description: "Porção de churrasco",
      price: 6.00
    },
    {
      name: "Calabresa",
      description: "Porção de calabresa",
      price: 4.00
    },
    {
      name: "Frango",
      description: "Porção de frango",
      price: 4.00
    },
    {
      name: "Bacon",
      description: "Porção de Bacon",
      price: 3.00
    },
    {
      name: "Hambúrguer",
      description: "Um habúrguer adicional",
      price: 3.00
    },
    {
      name: "Ovo",
      description: "Um ovo adicional",
      price: 4.00
    },
    {
      name: "Salsicha",
      description: "Uma salsicha adicional",
      price: 3.00
    },
    {
      name: "Cheddar",
      description: "Cheddar adicional",
      price: 3.00
    },
    {
      name: "Catupiry",
      description: "Catupiry adicional",
      price: 3.00
    },
    {
      name: "Milho",
      description: "Uma porção de milho adicional",
      price: 1.00
    },
    {
      name: "Alface",
      description: "Alface adicional",
      price: 1.00
    },
    {
      name: "Batata palha",
      description: "Uma porção de batata palha adicional",
      price: 1.00
    }
  ];


  const bebidas: MenuItem[] = [
    {
      name: "Refrigerante Coca-cola 2L",
      description: "Coca-Cola 2L",
      price: 13.00
    },
    {
      name: "Refrigerante Kuat 2L",
      description: "Kuat 2L",
      price: 6.00
    },
    {
      name: "Refrigerante Coca-cola 1,5L",
      description: "Coca-Cola 1,5L",
      price: 10.00
    },
    {
      name: "Refrigerante Latas",
      description: "Coca-cola, fanta, sprite",
      price: 5.00
    },
    {
      name: "Água Mineral",
      description: "Com ou sem gás",
      price: 4.00
    }
  ];

  const MenuSection = ({ title, items, icon }: { title: string; items: MenuItem[]; icon: React.ReactNode }) => (
    <div className="mb-12">
      <div className="flex items-center gap-2 mb-6">
        {icon}
        <h2 className="text-2xl font-bold text-amber-500">{title}</h2>
      </div>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-amber-500/10 hover:bg-gray-750 transition-all duration-300 border border-gray-700">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                <p className="text-gray-400 mt-2">{item.description}</p>
              </div>
              <span className="text-xl font-bold text-amber-500 bg-amber-500/10 px-4 py-2 rounded-full">
                R$ {item.price.toFixed(2)}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="relative h-[400px] overflow-hidden">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <img 
          src="https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&q=80&w=1965&h=600" 
          alt="Deliciosos lanches" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold text-center mb-4 text-white drop-shadow-lg">
             KS Lanches
          </h1>
          <p className="text-xl text-amber-300 font-medium">
            Sabor e qualidade desde 2017
          </p>
        </div>
      </div>

      <main className="max-w-4xl mx-auto px-6 py-16 -mt-16 relative z-30">
        <div className="bg-gray-850 rounded-2xl shadow-xl p-8 mb-12 border border-gray-800">
          <p className="text-center text-gray-300 text-lg mb-8 font-medium">
            Bem-vindo à KS Lanches! Aqui você encontra os melhores lanches da região, 
            preparados com ingredientes frescos e muito carinho.
          </p>
          
          <MenuSection 
            title="Hot Dogs" 
            items={hotdogs} 
            icon={<Menu className="w-8 h-8 text-amber-500" />} 
          />
          <MenuSection 
            title="Lanches" 
            items={lanches} 
            icon={<Utensils className="w-8 h-8 text-amber-500" />} 
          />
          <MenuSection 
            title="Acrescimos" 
            items={Acrescimos} 
            icon={<Utensils className="w-8 h-8 text-amber-500" />} 
          />
          <MenuSection 
            title="Bebidas" 
            items={bebidas} 
            icon={<Coffee className="w-8 h-8 text-amber-500" />} 
          />
        </div>
      </main>

      <footer className="bg-black text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg font-medium mb-2">KS Lanches</p>
          <p className="text-amber-400 mb-4">Aberto todos os dias das 19h às 23h</p>
          <p className="text-gray-500">© 2024 KS Lanches - Todos os direitos reservados</p>
          <p className="text-lg mt-4 font-medium">
            Faça seu pedido pelo WhatsApp: 
            <span className="text-amber-400 ml-2">(15) 99617-4755</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;