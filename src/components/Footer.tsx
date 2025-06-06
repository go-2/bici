import clsx from "clsx"
import React, { useState } from "react"
import { GitHub } from "react-feather"
import { AnimatePresence, motion } from "framer-motion"

function Footer({}) {
  const [showInfo, setShowInfo] = useState(false)
  return (
    <footer
      className={clsx(
        "flex items-center",
        "absolute bottom-3 right-3",
        "bg-gray-300/30 text-sm text-white",
        "backdrop-filter backdrop-blur",
        "p-2 rounded-lg",
        "dark:(bg-gray-600/60)"
      )}
      onMouseEnter={() => setShowInfo(true)}
      onMouseLeave={() => setShowInfo(false)}
    >
      <a
        href="https://beian.miit.gov.cn"
        target="_blank"
        className="flex items-center"
      >
        沪ICP备2023017627号
      </a>
      
    </footer>
  )
}

export default Footer
