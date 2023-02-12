import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const params = useParams();

    console.log(params.productID, params.productName);
    return <div>Hello I am a Product!</div>;
};

export default ProductPage;
