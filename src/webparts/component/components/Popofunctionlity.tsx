import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
// import './model.css';
import {FaAngleDown,FaAngleUp} from 'react-icons/fa';



export default function Popofunctionlity() {
  const [data, setData] = React.useState([]);
  const [search, setSearch]: [string, (search: string) => void] = React.useState("");
  const [toDoText, setToDoText] = React.useState("Title");
  const [tableData, setTableData] = React.useState(data);
  const [tablesData, setTablesData] = React.useState(data);
  React.useEffect(() => {
    const fetchData = () => {

      var getRequest = new XMLHttpRequest();
      var query = "Id,Mileage,TaskListId,TaskListName,WorkspaceType,PortfolioLevel,PortfolioStructureID,component_x0020_link,Package,Comments,DueDate,Sitestagging,Body,Deliverables,SiteCompositionSettings,StartDate,Created,Item_x0020_Type,Help_x0020_Information,Background,Categories,TechnicalExplanations,Idea,ValueAdded,Synonyms,Package,Short_x0020_Description_x0020_On,Admin_x0020_Notes,AdminStatus,CategoryItem,Priority_x0020_Rank,Priority,TaskDueDate,DueDate,PercentComplete,Modified,CompletedDate,ItemRank,Title,Portfolio_x0020_Type,Parent/Id,Parent/Title,Component/Id,Component/Title,Component/ItemType,Services/Id,Services/Title,Services/ItemType,Events/Id,Events/Title,Events/ItemType,SharewebCategories/Id,SharewebCategories/Title,AssignedTo/Id,AssignedTo/Title,Team_x0020_Members/Id,Team_x0020_Members/Title,ClientCategory/Id,ClientCategory/Title&$expand=SharewebCategories,ClientCategory,Parent,Component,Services,Events,AssignedTo,Team_x0020_Members&$filter=((Item_x0020_Type eq 'Component') or (Item_x0020_Type eq 'SubComponent') or (Item_x0020_Type eq 'Feature'))and (Portfolio_x0020_Type eq 'Component')&$top=4999";
      getRequest.open('GET', "https://hhhhteams.sharepoint.com/sites/HHHH/SP/_api/lists/getbyid('ec34b38f-0669-480a-910c-f84e92e58adf')/items?$select=" + query);
          getRequest.setRequestHeader("Accept", "application/json");

      getRequest.onreadystatechange = function () {

        if (getRequest.readyState === 4 && getRequest.status === 200) {
          var result = JSON.parse(getRequest.responseText);
          var resnext = result.value;
          console.log(resnext)
          setData(resnext);
        
        }
        else if (getRequest.readyState === 4 && getRequest.status !== 200) {
          console.log('Error Occurred !');

        }
      };
      getRequest.send();
    }
    fetchData();
  },

    []);
  
    const sortByName = () => {
        const copy = data
        copy.sort((a, b) => (a.Title > b.Title) ? 1 : -1);
        setTableData(copy)
      }
    
      const sortByLName = () => {
        const copy = data
        copy.sort((a, b) => (a.Title > b.Title) ? -1 : 1);
        setTablesData(copy)
      }
  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };
  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    let target = event.target;
    setToDoText((currentState) => {
      return target.value;
    })
  }
  return (

    <div>

      <div>
        <div>
          <Popup
            trigger={<button className="button" > ADD  Data </button>}
            modal
            nested
            contentStyle={{ width: '58%' , height:'20%'}}
          >
            <div >
              <div>
                <label>Name:</label>
                <input type="text" id="todo-text" onChange={handleInput} placeholder='Enter Name' />
              </div>

              
              <div>
                <label>Due Date:</label>
                <input type='text' placeholder='Enter Due Date' onChange={handleInput} />
              </div>
              <button type='button'>Save</button>
              <span>  </span>
              <button type='button' >Cancel</button>
            </div>
          </Popup>
        </div>
        <div className=''><input type="search" placeholder='search' onChange={handleChange} /></div>
        <table className="table table-striped table-bordered table-sm">
          <thead>
            <tr>
              <th className="th-sm">Name <input style={{ "width": "96%" }} type="search" placeholder='search Name' onChange={handleChange} />
              <td> <button onClick={sortByName}>Ascending Order </button></td>
            <td><button onClick={sortByLName}>Descending Order </button></td>
              </th>
             <th className="th-sm">DueDate<input type="search" style={{ "width": "96%" }} placeholder='search Due Date' onChange={handleChange} /></th>
              
              <th>Action</th>
            </tr>
          </thead>
        
           
          {data.map((item) => {
            if (search == "" || item.Title.toLowerCase().includes(search.toLowerCase())) {
              return (
                <tr>
                <td>{item.Title}</td>
                  <td>{item.DueDate}</td>
                  <td> <Popup
                    trigger={<button className="button"> Edit </button>}
                    modal
                    nested
                    contentStyle={{ width: '58%' , height:'20%'}}
                  >
                    <div >
                      <div>
                        <label>Name:</label>
                        <input type="text" id="todo-text" defaultValue={item.Title} placeholder='Enter Name' onChange={handleInput} />
                      </div>

                      
                      <div>
                        <label>Due Date:</label>
                        <input type='text' defaultValue={item.DueDate} placeholder='Enter Due Date' onChange={handleInput} />
                      </div>
                      <button type='button'>Save</button>
                      <span>  </span>
                      <button type='button' >Cancel</button>
                    </div> 
                  </Popup></td>


                </tr>
              );
            }
          })}
        </table>
      </div>
    </div>
  )
}





