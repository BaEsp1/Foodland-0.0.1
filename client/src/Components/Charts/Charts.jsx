



import React, { useEffect, useState } from 'react';
import { getOrdersAdmin } from '../../redux/actions/orderActions';
import { getAllProducts } from '../../redux/actions/productActions';
import {get_users} from "../../redux/actions/userActions"
import { useDispatch, useSelector } from 'react-redux';
import "./Charts.css"
import moment from 'moment';
import Slider from "react-slick";
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale,BarElement,Title);

const Chart = () => {
  const dispatch = useDispatch();
  const myOrders = useSelector((state) => state.order?.myOrders);
  const allProducts = useSelector ((state) => state.products.AllProducts.products);
  const users = useSelector((state) => state.users.users);
  const { userInfo } = useSelector((state) => state.userSignin);
  const token = userInfo.token;
  const [data, setData] = useState([]);
  const [greenData, setGreenData] = useState([]);
  const [blueData, setBlueData] = useState([]);


  // config primer chart

  const dataChart1 = {
    labels: Object.keys(data),
    datasets: [
      {
        label: '# of Votes',
        data: Object.values(data),
        backgroundColor: [
          '#be5cff57',
          '#4cee0c55',
          '#eed80e68',
          '#0ac2f076',
          '#4bc0c084',
          '#0e79ddb0',
          '#665de27b',
          '#36ebdc7b',
          '#df061873',
         
        ],
        borderColor: [
          '#be5cff',
          '#4cee0c',
          '#eed80e',
          '#0ac2f0',
          'rgba(75, 192, 192, 1)',
          '#0e79dd',
          '#655de2',
          '#36ebdc',
          '#df0618',
          
        ],
        borderWidth: 1,
      },
    ],
  };

  
  //config chart2

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position:'top'
      },
    },
  };
  const keys = Object.keys(data);

const labels = users.map((user) => user.name);

const dataChart2 = {
  labels,
  datasets: [
    {
      label: `Registered user in day `,
      data: users.map((user) => moment(user.createdAt).diff(moment('2023-05-09'), 'days')),
      backgroundColor: 'rgba(69, 236, 47, 0.5)',
    },
   
  ],
};


  // config carrousel

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };


  useEffect(() => {
    dispatch(getOrdersAdmin());
    dispatch(getAllProducts());
    dispatch(get_users(token));
  }, [dispatch,token]);

  
  // PRIMER CHART 

  useEffect(() => {  
    console.log(users)
    const nuevoArray = [];     // recorro las ordenes y guardo solo los productos {name, quantity}
    myOrders.forEach(e => {
      const { orderItems } = e;
      if (orderItems.length > 0) {
        const { name, quantity, image } = orderItems[0];
        nuevoArray.push({ name, quantity, image });
      }
    });
    nuevoArray.forEach(item => {  // comparo cada producto con la lista original de productos y le pongo la categoria
      const productoEncontrado = allProducts.find(producto => producto.name === item.name);
      if (productoEncontrado) {
        item.category = productoEncontrado.category;
      }
    });


const cantidadPorCategoria = {};

nuevoArray.forEach(producto => {
  if (cantidadPorCategoria[producto.category]) {
    cantidadPorCategoria[producto.category] += producto.quantity;
  } else {
    cantidadPorCategoria[producto.category] = producto.quantity;
  }
});
console.log(cantidadPorCategoria)

  setData(cantidadPorCategoria);
    
  
  // ------------ SECOND CHART  -------------- 


// Determinar qué producto se repite más veces y menos veces en cada categoría
const productosMasVendidos = [];
const productosMenosVendidos = [];

// Verificar si nuevoArray está vacío o no
if (nuevoArray.length > 0) {
  nuevoArray.forEach((producto) => {
    if (!productosMasVendidos[producto.category]) {
      productosMasVendidos[producto.category] = { name: '', quantity: 0 , image:''};
    }

    if (!productosMenosVendidos[producto.category]) {
      productosMenosVendidos[producto.category] = { name: '', quantity: Infinity , image:''};
    }

    if (producto.quantity > productosMasVendidos[producto.category].quantity) {
      productosMasVendidos[producto.category].name = producto.name;
      productosMasVendidos[producto.category].quantity = producto.quantity;
      productosMasVendidos[producto.category].image = producto.image;

    }

    if (producto.quantity < productosMenosVendidos[producto.category].quantity) {
      productosMenosVendidos[producto.category].name = producto.name;
      productosMenosVendidos[producto.category].quantity = producto.quantity;
      productosMenosVendidos[producto.category].image = producto.image;
    }
  });

} else {
  console.log('El array nuevoArray está vacío.');
}

//setear para los productos mas y menos vendidos
 setBlueData(productosMasVendidos)
 setGreenData(productosMenosVendidos)

  }, [allProducts, myOrders]);


  return (
    <div className='chartContainer'>
    
    <div className='chart1'>
      <div>
      <Pie data={dataChart1} style={{width:"450px", height:"450px"}}/>
      </div>  
     <div className='chart1_text'>
     <p>Sales index by category</p>
     <ul>
      {keys.map((key) => (
        <li >
          {key} :<span> {data[key]}</span>
        </li>
      ))}
    </ul>
     </div>
    </div>

    <div className='chart3'>
     <p>Number of registered users since '05-09-2023' = <span>{users.length}</span></p> 
    <Bar options={options} data={dataChart2} />
    </div>

    <div className='chart2'>
    <div className='sliderMasVendidos'>
    <span> Most selled products </span>
    <Slider {...settings}>
  {Object.entries(blueData).map(([category, { name, quantity, image }], index) => (
    <div key={category}>
   
      <div className="card">
        <h4>{category}</h4>
        <p>{name}</p>
        <span>{quantity}</span>
        <img src={image} alt={name} />
      </div>
    </div>
  ))}
</Slider>
</div>
<div className='sliderMasVendidos'>
<span>  Less selled products </span>
    <Slider {...settings}>
  {Object.entries(greenData).map(([category, { name, quantity, image }], index) => (
     <div key={category}>
      <div className="card">
        <h4>{category}</h4>
        <p>{name}</p>
        <span>{quantity}</span>
        <img src={image} alt={name} />
    </div>
    </div>
  ))}
</Slider>
</div>
</div>
</div>


  );
};


export default Chart;

