import React, { lazy, Suspense } from "react";
import NavbarL from "./NavbarL";
import HeroL from "./HeroL";
const TestimonialsL = lazy(()=>import("./TestimonialsL.js"));
const FooterL = lazy(()=>import("./FooterL.js"));
function Lazycall(){
    return(
        <div>
            <Suspense fallback={<h1>Please wait...</h1>}>
            <FooterL/>
            </Suspense>
            <Suspense fallback={<h1>Sbar rakho...</h1>}>
            <TestimonialsL/>
            </Suspense>
            <NavbarL/>
            <HeroL/>
        </div>
    )
}
export default Lazycall;