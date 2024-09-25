import Content from "../content";

const Footer = () => {
  return ( 
    <div 
      className='relative h-[640px]'
      style={{clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)"}}
    >
    <div className='fixed bottom-0 h-[640px] w-full bg-gray-300'>
      <Content />
    </div>
  </div>
   );
}
 
export default Footer;