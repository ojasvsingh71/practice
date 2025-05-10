import { motion } from "framer-motion"

export default function Hello_world() {
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
        >
            Hello world
        </motion.button>
    )
}