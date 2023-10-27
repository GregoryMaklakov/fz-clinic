import { motion } from "framer-motion"
import { Icon } from "../Icons"

export function TransitionPageEffect() {
    return (
        <>
            <motion.div className="fixed bottom-0 top-0 right-[110%] w-screen h-screen z-[100] bg-primary flex items-center justify-center"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                exit={{ x: ["0%", "100%"], width: ["-100%", "100%"] }}
                transition={{ duration: 0.8, ease: "easeInOut" }} >
                <Icon name="fz" size={100} />
            </motion.div>
            <motion.div className="fixed bottom-0 top-0 right-full w-screen h-screen z-[90] bg-dark dark:bg-light"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }} />
            <motion.div className="fixed bottom-0 top-0 right-full w-screen h-screen z-[80] bg-light dark:bg-dark"
                initial={{ x: "100%", width: "100%" }}
                animate={{ x: "0%", width: "0%" }}
                transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }} />
        </>
    )
}

export default TransitionPageEffect