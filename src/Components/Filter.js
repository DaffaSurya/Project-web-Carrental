import "../Style/Filter.css"
const Filter= (props) => {
    return (
        <div className="div-filter">
           <div className="container-filter">
             <div className="content-filter">
              <label className="label-filter">Cari mobil</label>
              <input type={"text"} placeholder="Ketik nama/cari mobil" className="input-filter"
              onChange={props.namefilter}/>
             </div>

             <div className="content-filter">
              <label className="label-filter">Category</label>
              <select className="select-filter">
              <option onChange={props.Categoryfilter}>masukkan category</option>
              <option onChange={props.Categoryfilter}>1-4 orang</option>
              <option onChange={props.Categoryfilter}>1-6 orang</option>
              <option onChange={props.Categoryfilter}>1-8 oranf</option>
              </select>
             </div>

             <div className="content-filter">
               <label className="label-filter">Harga</label>
               <select className="select-filter">
                   <option>Masukkan harga sewa mobi</option>
                   <option onChange={props.minfilter} value={'small'}>Rp.200000-Rp.400000</option>
                   <option onChange={props.maxfilter} value={'medium'}>Rp.400000-Rp.800000</option>
               </select>
             </div>
             <div className="content-filter">
             <label className="label-filter">status</label>
              <select className="select-filter" onChange={props.statfilter}>
                <option value={true} onChange={props.statfilter}>disewakan</option>
                <option value={false} onChange={props.statfilter}>tersedia</option>
              </select>
             </div>

             <div className="div-button-filter">
               <button className="button-filter" onClick={props.handlesearch}>
                 <p>Cari Mobil</p>
               </button>
             </div>
           </div>
        </div>
    );
}
 
export default Filter;

