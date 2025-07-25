/**
 * @author saozdemir
 * @project WebProjectWorkspace
 * @date 23 Jul 2025
 * <p>
 * @description:
 */

export interface UserType{
    id: string,
    username: string,
    password: string,
    balance: number
}

export interface ProductType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string,
    rating: RateType
}

//Local olarak kullanldı. Dış kullanıma açılmadı.
interface RateType {
    rate: number,
    count: number
}