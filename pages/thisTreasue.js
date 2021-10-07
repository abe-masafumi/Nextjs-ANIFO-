import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from '../components/Header'
import { Button } from '../components/Button'

export const getServerSideProps = async (context) => {
  const keyword = context.query.name;
  console.log(`☀️☀️queryが取得できました--> ${keyword}`);
          // ローカルと本番用で切り替えてね🤗🤗🤗
  // const res = await fetch(`https://loving-kusu-4281.lolipop.io/thisTresure.php`)
  const res = await fetch(`http://localhost/myfile_lab05/%20NFTMetaData/thisTresure.php`, {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(keyword),
  })
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { data }, // will be passed to the page component as props
  }
}

export default function thisTreasue({ data }) {
  console.log(data["MetaMaskAddress"]);
  console.log(data["create_at"]);
  console.log(data["discription"]);
  console.log(data["image"]);
  console.log(data["meta_id"]);
  console.log(data["plice"]);
  console.log(data["title"]);
  console.log(data["uniqid"]);
  console.log(data["update_at"]);
  console.log(data);
  const addressfirst = data["MetaMaskAddress"].substr( 0, 4 );
  const addressend = data["MetaMaskAddress"].substr( -4 );

  const copyAddress = () => {
    const copybutton = document.getElementById('copybutton')
    navigator.clipboard.writeText(data["MetaMaskAddress"])
    copybutton.innerHTML = "Copyed!"
    window.setTimeout(function(){
      copybutton.innerHTML = `${addressfirst}...${addressend}`
    }, 3000);

  }

  return (
    <div className="vh-100 vw-100 position-fixed" style={{background:"#0b1118"}}>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-8 vh-100 d-flex align-items-center justify-content-center">
            <div>
              {/* <img src={`https://loving-kusu-4281.lolipop.io/image/${data["uniqid"]}${data["image"]}`} /> */}
              <img src={`http://localhost/myfile_lab05/%20NFTMetaData/image/${data["uniqid"]}${data["image"]}`} />
            </div>
          </div>
          <div className="col-4 vh-100" style={{background:"#0b1118", color:"#eef0e6"}}>
            <div className="h1">{data["title"]}</div>
            <div className="h6" style={{opacity:0.2}}>{data["create_at"]}</div>
            <div className="h3">{data["plice"]} <span className="h4">ETH</span></div>
            <div className="h3">{data["discription"]}</div>
            <div data-toggle="tooltip" title="copy">
              <button id="copybutton" style={{border: "solid 1px #152032", borderRadius:"5rem" }} onClick={copyAddress}>
              {`${addressfirst}...${addressend}`}
              </button>
            </div>
            <div className="position-absolute bottom-0 mb-4">
              <Button
                title="作品を購入する"
                message="この作品を購入します"
                color="#eef0e6"
                backColor="#3a526f"
                width="500px"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};