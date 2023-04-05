import { Product } from "../../utils/types";

export function checkIsSelected(selectedProducts: Product[], product: Product) {
  //some.(x -> condição) verifica se existe algum item selecionado e retorna true
  return selectedProducts.some(item => item.id === product.id);
} 

