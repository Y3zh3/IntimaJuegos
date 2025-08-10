"use client";

import { useContext } from "react";
import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { CartContext } from "@/context/cart-context";
import { ShoppingCartIcon, Trash2Icon } from "./icons";
import { useToast } from "@/hooks/use-toast";

export function CartSheet() {
  const { cartItems, itemCount, cartTotal, removeFromCart, clearCart } = useContext(CartContext);
  const { toast } = useToast();

  const handleRemoveFromCart = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast({
      title: "Producto eliminado",
      description: `${productName} ha sido eliminado de tu carrito.`,
      variant: "destructive",
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast({
        title: "Carrito vacío",
        description: "Todos los productos han sido eliminados.",
        variant: "destructive",
    });
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <ShoppingCartIcon className="h-6 w-6" />
          {itemCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground">
              {itemCount}
            </span>
          )}
          <span className="sr-only">Abrir Carrito</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
        <SheetHeader className="px-4">
          <SheetTitle>Carrito ({itemCount})</SheetTitle>
        </SheetHeader>
        <Separator />
        {itemCount > 0 ? (
          <>
            <div className="flex-1 overflow-y-auto">
                <ScrollArea className="h-full">
                    <div className="flex flex-col gap-4 p-4 pr-6">
                    {cartItems.map((item) => (
                        <div key={item.id} className="flex items-start gap-4">
                        <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-md">
                            <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            />
                        </div>
                        <div className="flex-1">
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-primary">{item.price}</p>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-muted-foreground hover:text-destructive"
                            onClick={() => handleRemoveFromCart(item.id, item.name)}
                        >
                            <Trash2Icon className="h-4 w-4" />
                            <span className="sr-only">Eliminar</span>
                        </Button>
                        </div>
                    ))}
                    </div>
                </ScrollArea>
            </div>
            <Separator />
            <SheetFooter className="p-4 space-y-4">
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span>{cartTotal}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Envío</span>
                  <span>Gratis</span>
                </div>
                 <Separator />
                <div className="flex items-center justify-between font-bold text-base">
                  <span>Total</span>
                  <span>{cartTotal}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <SheetClose asChild>
                    <Button variant="outline" className="flex-1" onClick={handleClearCart}>
                        Vaciar Carrito
                    </Button>
                </SheetClose>
                <SheetClose asChild>
                    <Button className="flex-1">Finalizar Compra</Button>
                </SheetClose>
              </div>
            </SheetFooter>
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <ShoppingCartIcon className="h-16 w-16 text-muted-foreground/30" />
            <h3 className="text-xl font-semibold">Tu carrito está vacío</h3>
            <p className="text-muted-foreground">
              Parece que aún no has añadido ningún producto.
            </p>
            <SheetClose asChild>
                <Button>Seguir Comprando</Button>
            </SheetClose>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
