import cn from "@/utils/function";

interface ArrowProps {
  color?: 50 | 900;
  rotate?: boolean;
}



const Arrow = ({ color, rotate }: ArrowProps) => {

  const hexaColor = color === 50 
    ? '#f9fafb' 
    : '#111827'; 

  return ( 
    <svg 
      width="10" 
      height="12" 
      viewBox="0 0 10 12" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg" 
      className={cn(
        rotate && ' -rotate-90'
    )}>
      <mask id="path-1-inside-1_195_37" fill="white">
        <path d="M0 1.01831H10V11.0183H0L0 1.01831Z"/>
      </mask>
      <path d="M10 11.0183V12.0183H11V11.0183H10ZM9 1.01831V11.0183H11V1.01831H9ZM10 10.0183H0L0 12.0183H10V10.0183Z" fill={hexaColor} mask="url(#path-1-inside-1_195_37)"/>
      <path d="M0.422852 1.06903L9 10.0002" stroke={hexaColor} />
    </svg>


   );
}
 
export default Arrow;