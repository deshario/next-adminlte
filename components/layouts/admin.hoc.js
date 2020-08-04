import React, { Component } from 'react'
import AdminSideBar from './admin.sidebar'
import AdminHeader from './admin.header'
import AdminFooter from './admin.footer'
import AdminContent from './admin.content'

export default class AdminHOC extends Component {
    render() {
        return (
            <div>
                <AdminHeader />
                <AdminSideBar />
                <AdminContent title={this.props.contentTitle}>
                    {this.props.children}    
                </AdminContent>
                <AdminFooter />
            </div>
        )
    }
}
