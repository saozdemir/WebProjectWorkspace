/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 25 Jul 2025
 * <p>
 * @description:
 */
import type {ProductType} from "../types/Types.tsx";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface ProductCardProps {
    product: ProductType
}

function ProductCard(props: ProductCardProps) {
    const{id, title, price, description, category, image, rating} = props.product;
    return (
        <Card className={"card"} sx={{ maxWidth: 345 }}>
            <img src={image} width={230} height={230}/>
            <CardContent sx={{height: "250px"}}>
                <Typography gutterBottom variant="h5" component="div">
                    {title.substring(0,50)}...
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    {description.substring(0,200)}...
                </Typography>
            </CardContent>
            <div>{price.toFixed(2)} ₺</div>
            <CardActions>
                <Button size="small" variant={"outlined"} color={"info"}>Detay</Button>
            </CardActions>
        </Card>
    )
}

export default ProductCard
