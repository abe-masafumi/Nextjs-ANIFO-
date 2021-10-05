
// type TodoType = {
//   data: string
// }

export const Treasures = (props) => {
  const { data } = props
  console.log(data);
  
  return (
    <div>
        {
          data.map((item,index) => (
            <div key={index} style={{color:"white"}}>
              {/* <div>{item}</div> */}
              <img src={`http://localhost/myfile_lab05/%20NFTMetaData/image/${item.uniqueNumber}${item.image}`} style={{height:200, width:200}} />
              <div>{item.title}</div>
              <div>{item.discription}</div>
              <div>{item.plice}</div>
            </div>
   
          ))
        }
    </div>
  );
};