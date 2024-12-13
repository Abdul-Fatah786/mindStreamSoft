import { Monitor, ShoppingBag } from "lucide-react";
import { ServiceCard } from "../Component/ServiceCard";

export default function Page() {
    return (
        <div className="grid md:grid-cols-2 gap-6 p-6">
            <ServiceCard
                title="Shopify Stores"
                description="Unlock the potential of e-commerce with our Shopify store development. We design and optimize online storefronts that not only showcase your products beautifully but also provide a seamless and secure shopping experience for your customers."
                icon={ShoppingBag}
                href="/services/shopify"
            />
            <ServiceCard    
                title="UI/UX Design"
                description="Crafting visually stunning and intuitively designed interfaces is our forte. Our UI/UX design services focus on enhancing user engagement and satisfaction. From wireframes to the final product, we prioritize aesthetics, functionality, and a delightful user experience."
                icon={Monitor}
                href="/services/design"
                variant="purple"
            />
            <ServiceCard
                title="Shopify Stores"
                description="Unlock the potential of e-commerce with our Shopify store development. We design and optimize online storefronts that not only showcase your products beautifully but also provide a seamless and secure shopping experience for your customers."
                icon={ShoppingBag}
                href="/services/shopify"
            />
            <ServiceCard
                title="UI/UX Design"
                description="Crafting visually stunning and intuitively designed interfaces is our forte. Our UI/UX design services focus on enhancing user engagement and satisfaction. From wireframes to the final product, we prioritize aesthetics, functionality, and a delightful user experience."
                icon={Monitor}
                href="/services/design"
                variant="purple"
            />
        </div>
    );
}
