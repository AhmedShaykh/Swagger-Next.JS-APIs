import { ReactNode } from "react";

const APISLayout = ({
    children
}: Readonly<{
    children: ReactNode
}>) => {
    return (
        <div className="bg-[#fdfcfc] text-zinc-500 font-[600] h-full">
            {children}
        </div>
    )
};

export default APISLayout;