import { ReactNode } from "react";

const APISLayout = ({
    children
}: Readonly<{
    children: ReactNode
}>) => {
    return (
        <div className="bg-[#ebe6e6] text-zinc-500 font-[600] h-full">
            {children}
        </div>
    )
};

export default APISLayout;