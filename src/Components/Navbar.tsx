import Link from "next/link";

const Navbar = () => {
    return (
        <div className="flex justify-center items-center py-7 gap-7 bg-zinc-900">
            <Link href="/api-docs">
                <h2 className="text-[1.3rem] font-semibold">
                    APIs
                </h2>
            </Link>
        </div>
    )
};

export default Navbar;