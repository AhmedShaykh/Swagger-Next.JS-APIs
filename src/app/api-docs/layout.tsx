import { ReactNode } from "react";

const APISLayout = ({
    children
}: Readonly<{
    children: ReactNode
}>) => {
    return (
        <div className="bg-slate-100 text-zinc-500 h-full">
            {children}
        </div>
    )
};

export default APISLayout;