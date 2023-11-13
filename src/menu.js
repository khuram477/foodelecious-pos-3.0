function MenuBar() {
    return (



<div id="sidebar" class="app-sidebar">

    <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">

        <div class="menu" style={{ backgroundColor: 'white', marginTop: '10px', marginLeft: '5px', borderRadius: '15px' }}>
            <div class="menu-header">Navigation</div>
            <div class="menu-item">
                <a href="index-2.html" class="menu-link">
                    <span class="menu-icon"><i class="bi bi-cpu"></i></span>
                    <span class="menu-text">Dashboard</span>
                </a>
            </div>
            <div class="menu-item">
                <a href="analytics.html" class="menu-link">
                    <span class="menu-icon"><i class="bi bi-bar-chart"></i></span>
                    <span class="menu-text">Analytics</span>
                </a>
            </div>

            <div class="menu-header">Components</div>
            
            <div class="menu-item has-sub">
                <a href="javascript:;" class="menu-link">
                    <div class="menu-icon">
                        <i class="bi bi-bag-check"></i>
                        <span class="w-5px h-5px rounded-3 bg-theme position-absolute top-0 end-0 mt-3px me-3px"></span>
                    </div>
                    <div class="menu-text d-flex align-items-center">POS System</div>
                    <span class="menu-caret"><b class="caret"></b></span>
                </a>
                <div class="menu-submenu">
                    <div class="menu-item">
                        <a href="pos_customer_order.html" target="_blank" class="menu-link">
                            <div class="menu-text">Customer Order</div>
                        </a>
                    </div>
                 
                </div>
            </div>
          
         
           
            <div class="menu-item has-sub active">
                <a href="#" class="menu-link">
                    <span class="menu-icon"><i class="bi bi-collection"></i></span>
                    <span class="menu-text">Pages</span>
                    <span class="menu-caret"><b class="caret"></b></span>
                </a>
               
            </div>
            <div class="menu-divider"></div>
            <div class="menu-header">Users</div>
            <div class="menu-item">
                <a href="profile.html" class="menu-link">
                    <span class="menu-icon"><i class="bi bi-people"></i></span>
                    <span class="menu-text">Profile</span>
                </a>
            </div>
          
            <div class="menu-item">
                <a href="settings.html" class="menu-link">
                    <span class="menu-icon"><i class="bi bi-gear"></i></span>
                    <span class="menu-text">Settings</span>
                </a><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            </div>
           
        </div>

    </div>

</div>

    );
}

export default MenuBar;
