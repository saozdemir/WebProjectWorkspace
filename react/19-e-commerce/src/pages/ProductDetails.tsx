import {useParams} from "react-router-dom";
import Container from '@mui/material/Container';
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setLoading} from "../redux/appSlice.tsx";
import {toast} from "react-toastify";
import productService from "../services/ProductService.ts";
import type {ProductType} from "../types/Types.tsx";
import '../css/ProductDetails.css';
import Button from "@mui/material/Button";
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Chip from '@mui/material/Chip';

/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 30 Jul 2025
 * <p>
 * @description:
 */
function ProductDetails() {

    const {productId} = useParams();
    const [product, setProduct] = useState<ProductType | null>(null);
    const [count, setCount] = useState<number>(0);
    const dispatch = useDispatch();

    const getProductDetailsById = async (id: number) => {
        try {
            dispatch(setLoading(true));
            const product: ProductType = await productService.getProductById(id);
            setProduct(product);
        } catch (e) {
            toast.error("An error occurred while fetching product details.");
        } finally {
            dispatch(setLoading(false));
        }
    }

    useEffect(() => {
        getProductDetailsById(Number(productId));
    }, []);

    return (
        <Container maxWidth={"lg"}>
            {
                product && <>
                    <div className={"product-details-wrapper"}>
                        <div>
                            <img src={product.image} width={250} height={400} alt={""}/>
                        </div>
                        <div style={{marginLeft:"60px", marginTop:"60px"}}>
                            <div style={{fontFamily:"arial", fontSize: "20px", fontWeight:"bold"}}>{product.title}</div>
                            <div style={{fontFamily:"arial", fontSize: "15px", marginTop: "25px", height:"100px"}}>{product.description}</div>

                            <div style={{fontFamily:"arial", fontSize: "25px", fontWeight:"bold"}}>{product.price} ₺</div>
                            <div>
                                <IconButton>
                                    <AddIcon onClick={()=>{setCount(count+1)}} fontSize={"medium"} color={"info"} />
                                </IconButton>
                                <Chip label={count>=0 ? count : 0}/>
                                <IconButton>
                                    <RemoveIcon onClick={()=>{setCount(count-1)}} fontSize={"medium"} color={"info"} />
                                </IconButton>
                            </div>
                            <div>
                                <Button color={"info"} variant={"contained"} size={"small"} sx={{textTransform: "none", marginTop:"20px"}}>Sepete Ekle</Button>
                            </div>
                        </div>

                    </div>
                </>
            }

        </Container>
    )
}

export default ProductDetails
