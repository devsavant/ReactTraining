import React, { Component } from 'react'

class FilterTable extends Component {

    state = {
        allItems:[{name:"Luis", role:"Admin", status:"blacklisted"},{name:"Patrick", role:"Guest", status:"active"},{name:"Annie", role:"Admin", status:"inactive"}],
        items:[{name:"Luis", role:"Admin", status:"inactive"},{name:"Patrick", role:"Guest", status:"blacklisted"}]
    }

    filterByStatus = (e) => {
        let {value} = e.target
        console.log(value)
        this.setState({items:this.state.allItems.filter(item=>item.status === value)})
    }
    filterByRole = (e) => {
        let {value} = e.target
        console.log(value)
        this.setState({items:this.state.allItems.filter(item=>item.role === value)})
    }
    clearFilters = () => {
        this.setState({items:this.state.allItems})
    }

    renderRows = ({name, role, status}, index) => {
        return (<tr key={index}><td>{name}</td><td>{role}</td><td>{status}</td></tr>)
    }

    renderRoles = () => {
        let roles = {}
        this.state.allItems.forEach(item=>roles[item.role]=true)
        return Object.keys(roles).map(role=><option key={role} value={role} >{role}</option>)
    }

    renderStatus = () => {
        let status = {}
        this.state.allItems.forEach(item=>status[item.status]=true)
        return Object.keys(status).map(status=><option key={status} value={status} >{status}</option>)
    }

    render() {
        return (
            <div>
                <h2>Table with filters</h2>
                <label>
                    Filter by role:
                    <select onChange={this.filterByRole}>
                       {this.renderRoles()}
                    </select>
                </label>
                <label>
                    Filter by Status:
                    <select onChange={this.filterByStatus}>
                       {this.renderStatus()}
                    </select>
                </label>
                <button onClick={this.clearFilters}>Clear filters</button>
               <table width={500} border="1">
                   <thead>
                    <tr>
                        <th>Name</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.items.map(this.renderRows)}
                </tbody>
               </table>
            </div>
        )
    } 
}

const styles = {
    display:"flex",
    justifyContent:"center",
    alignItems:"center"
}

export default FilterTable