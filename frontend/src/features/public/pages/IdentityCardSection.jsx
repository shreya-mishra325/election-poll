import { motion } from "framer-motion";

export default function IdentityCardSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
  <div className="max-w-6xl mx-auto px-6 text-center">

    <motion.h2
      className="text-3xl sm:text-4xl font-bold mb-4"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      Secure Digital Identity
    </motion.h2>

    <motion.p
      className="text-gray-600 max-w-2xl mx-auto mb-16"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
    >
      Every participant is verified and assigned a role before
      accessing the election system. Role-Based Access Control
      ensures that voters, candidates and administrators only
      access what they are authorized to use.
    </motion.p>

    <div
      className="relative flex justify-center items-center"
      style={{ perspective: "2000px" }}
    >

      {/* Large Shadow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.18, 0.28, 0.18]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="
          absolute
          bottom-0
          w-[340px]
          h-[45px]
          bg-black
          rounded-full
          blur-3xl
        "
      />

      {/* Rise Animation */}

      <motion.div
        initial={{
          y: 220,
          opacity: 0,
          scale: 0.85
        }}
        whileInView={{
          y: 0,
          opacity: 1,
          scale: 1
        }}
        viewport={{ once: true }}
        transition={{
          duration: 1.8,
          ease: "easeOut"
        }}
        className="
          relative
          w-[90vw]
          max-w-[420px]
          h-[260px]
        "
      >

        {/* Continuous Rotation */}

        <motion.div
        animate={{
            rotateY: [0, 360],
            y: [0, -8, 0],
            rotateX: [-6, 6, -6],
            rotateZ: [-3, 3, -3]
        }}
        transition={{
            rotateY: {
            duration: 8,
            repeat: Infinity,
            ease: "linear",
            repeatType: "loop"
            },

            y: {
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
            },

            rotateX: {
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
            },

            rotateZ: {
            duration: 7,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut"
            }
        }}
        style={{
            width: "100%",
            height: "100%",
            position: "relative",
            transformStyle: "preserve-3d"
        }}
        >
          {/* FRONT */}

          <div
            className="
              absolute inset-0
              rounded-3xl
              border border-gray-200
              bg-gradient-to-r
              from-orange-100
              via-white
              to-green-100
              shadow-2xl
              p-5
              flex
              flex-col
            "
            style={{
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          >

            <div className="flex justify-between items-center">

              <h3 className="font-bold text-base sm:text-lg">
                ELECTPOLL VOTER ID
              </h3>

              <img
                src="/images/india.png"
                alt="India"
                className="w-10 h-10 object-cover rounded-md"
              />

            </div>

            <div className="flex gap-4 mt-5 items-center">

              <div
                className="
                  w-20
                  h-20
                  rounded-full
                  overflow-hidden
                  border-2
                  border-white
                  shadow-lg
                  bg-gray-200
                "
              >
                <img
                  src="/images/avatar.avif"
                  alt="Avatar"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-left text-sm sm:text-base">

                <p className="mb-1">
                  <span className="font-semibold">Name:</span> Demo User
                </p>

                <p className="mb-1">
                  <span className="font-semibold">Role:</span> Voter
                </p>

                <p className="mb-1">
                  <span className="font-semibold">ID:</span> EP-2026-001
                </p>

                <p className="text-green-600 font-semibold">
                  ✓ Verified Identity
                </p>

              </div>

            </div>

            <div className="mt-auto border-t pt-2 text-[11px] text-gray-600">
              Secure • Verified • Authorized
            </div>

          </div>

          {/* BACK */}

          <div
            className="
              absolute inset-0
              rounded-3xl
              bg-gradient-to-br
              from-indigo-600
              via-indigo-700
              to-indigo-900
              text-white
              shadow-2xl
              p-4
              flex
              flex-col
            "
            style={{
              transform: "rotateY(180deg)",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden"
            }}
          >

            <h3 className="font-bold text-lg mb-3">
              RBAC Permissions
            </h3>

            <div className="space-y-2 flex-1 text-left">

              <div className="bg-white/10 rounded-lg px-3 py-2">
                <div className="font-semibold text-sm">
                  🗳️ Voter
                </div>
                <div className="text-xs text-indigo-100">
                  Cast Vote Securely
                </div>
              </div>

              <div className="bg-white/10 rounded-lg px-3 py-2">
                <div className="font-semibold text-sm">
                  🎤 Candidate
                </div>
                <div className="text-xs text-indigo-100">
                  Manage Campaign Profile
                </div>
              </div>

              <div className="bg-white/10 rounded-lg px-3 py-2">
                <div className="font-semibold text-sm">
                  ⚙️ Admin
                </div>
                <div className="text-xs text-indigo-100">
                  Manage Elections & Results
                </div>
              </div>

            </div>

            <div className="pt-2 text-[11px] text-indigo-200">
              Role-Based Access Control ensures only authorized
              users can perform specific actions.
            </div>

          </div>

        </motion.div>
      </motion.div>
    </div>
  </div>
</section>
  );
}