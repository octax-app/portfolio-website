function CardSvg({title}) {
    var color =
      title === "Clean"
        ? "bg-[#fbd15b]"
        : title === "Elegant"
        ? "bg-[#ff8478]"
        : "bg-[#5f6cf1]";


    return (
      <div
        className={`rounded-full ${color} p-3 z-10 h-12 w-12 flex items-center justify-center`}
      >
        {title === "Clean" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 5H2M5 19H2M3 12H2M15.39 5.21L16.8 8.03C16.99 8.42 17.5 8.79 17.93 8.87L20.48 9.29C22.11 9.56 22.49 10.74 21.32 11.92L19.33 13.91C19 14.24 18.81 14.89 18.92 15.36L19.49 17.82C19.94 19.76 18.9 20.52 17.19 19.5L14.8 18.08C14.37 17.82 13.65 17.82 13.22 18.08L10.83 19.5C9.12 20.51 8.08 19.76 8.53 17.82L9.1 15.36C9.21 14.9 9.02 14.25 8.69 13.91L6.7 11.92C5.53 10.75 5.91 9.57 7.54 9.29L10.09 8.87C10.52 8.8 11.03 8.42 11.22 8.03L12.63 5.21C13.38 3.68 14.62 3.68 15.39 5.21Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {title === "Elegant" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.67 18.67L20.89 17.56V14.78M14.22 9.78L12 10.89M12 10.89L9.77999 9.78M12 10.89V13.67M20.89 6.44L18.67 7.55M20.89 6.44L18.67 5.33M20.89 6.44V9.22M3.10999 6.44L5.32999 5.33M3.10999 6.44L5.32999 7.55M3.10999 6.44V9.22M12 22L9.77999 20.89M12 22L14.22 20.89M12 22V19.22M14.22 3.11L12 2L9.77999 3.11H14.22ZM5.32999 18.67L3.10999 17.56V14.78L5.32999 18.67Z"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        {title === "Efficient" && (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 4H1.5M7.5 20H1.5M4.5 12H1.5M9.32 13.28H12.41V20.48C12.41 21.54 13.73 22.04 14.43 21.24L22 12.64C22.66 11.89 22.13 10.72 21.13 10.72H18.04V3.52C18.04 2.46 16.72 1.96 16.02 2.76L8.45 11.36C7.8 12.11 8.33 13.28 9.32 13.28Z"
              stroke="white"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
    );
}

export default CardSvg;