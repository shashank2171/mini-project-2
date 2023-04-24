import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";
import axios from "axios";



let last = "";
function removeTags(str) {
  if ((str===null) || (str===''))
      return "Not available";
  else
      str = str.toString();
        
  // Regular expression to identify HTML tags in
  // the input string. Replacing the identified
  // HTML tag with a null string.
  return str.replace( /(<([^>]+)>)/ig, '');
}

function SearchBar() {
  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [curr, setCurr] = useState("");
  const [res, setRes] = useState([]);
  window.addEventListener("pointerdown",(e)=>{
    //console.log(e.target.id);
    setCurr(e.target.id);
  })
  
  
  useEffect(() => {
    
    
    const keyDownHandler = event => {
      //console.log('User pressed: ', event.key);

      if (event.key === 'Enter') {
        event.preventDefault();

        // call submit function here
        search();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  });

  useEffect(() => {
    console.log(curr, '- Has changed');
    if(curr!==null && curr.substring(0, 3)==='li_'){
      last = curr;
      getInfo();
    }
    else if(curr==="do_@"){
  
      window.open('https://cloudflare-ipfs.com/ipfs/'+res.data[Number(last[3])-1].ipfs_cid.toLowerCase(), '_blank');

    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[curr])

  const getInfo = async() => {
    let k = res.data[Number(curr[3])-1]
    console.log(k);

    let s = k.identifier;
    let i =0;
    while(s[i++]<s.length && s[i]!==',');
    
    s = s.substring(0,i);

    // const configuration = {
    //     method: "post",
    //     url: "http://localhost:3001/cover",
    //     data: {s}
    // };

    // axios(configuration)
    // .then((result)=>{
    //   console.log(result);
    // })
    

    console.log('https://covers.openlibrary.org/b/isbn/'+s.substring(0,i)+'-L.jpg');

    document.getElementById('bookImg').src='https://covers.openlibrary.org/b/isbn/'+s.substring(0,i)+'-L.jpg';

    let des = removeTags(k.descr);
    document.getElementById('descId').innerText = "NAME: "+k.title+"\n\nAUTHOR: "+k.author+"\n\nLANGUAGE: "+k.language+"\n\nPUBLISHER:  "+k.publisher+"\n\nEXTENSION:  "+k.extension+"\n\nIDENTIFIER:  "+k.identifier+"\n\nDESCRIPTION: "+des;
    
  }

  const search = async() => {
            let query  = wordEntered;
            console.log(query);
    
            const configuration = {
                method: "post",
                url: "http://localhost:3001/search",
                data: {query}
            };
    
            axios(configuration)
            .then((result)=>{
                console.log(result.data); 
                setRes(result);
                let list = document.getElementById('list');
                list.innerHTML="";
                let i =1;
                result.data.forEach((item)=>{
                  let li = document.createElement("li");
                  li.setAttribute('id',"li_"+i);
                  li.setAttribute('className', 'liItem');
                  i++;
                  li.innerText = item.title;
                  list.appendChild(li);
                })
            })
            .catch((e)=>{
                console.log(e);
            })
    
    }


  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(searchWord);
    }
  };

  const clearInput = () => {
    console.log(wordEntered);
    setFilteredData([]);
    setWordEntered("");
  };

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Enter book or author's name here..."
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <SearchIcon />
          ) : (
            <CloseIcon id="clearBtn" onClick={clearInput} />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchBar;