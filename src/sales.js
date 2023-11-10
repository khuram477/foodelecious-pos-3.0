/* eslint-disable jsx-a11y/anchor-is-valid */
function SalesReport() {
    return (


        <div id="app" class="app" >

            <div id="header" class="app-header"  style={{backgroundColor:'white', }}>

                <div class="desktop-toggler">
                    <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-collapsed" data-dismiss-class="app-sidebar-toggled" data-toggle-target=".app">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>


                <div class="mobile-toggler">
                    <button type="button" class="menu-toggler" data-toggle-class="app-sidebar-mobile-toggled" data-toggle-target=".app">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </button>
                </div>


                <div class="brand">
                    <a href="index-2.html" class="brand-logo">
                       
                        <span class="">   <img
                    src="../assets/img/pos/logo.png"
                    style={{
                      height: 30,
                      width: 130,
                      marginTop: "-5%",
                      marginLeft: "40%",    
                    }}
                    alt=""
                  /> </span>
                    </a>
                </div>


                <div class="menu">
                    <div class="menu-item dropdown">
                        <a href="#" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app" class="menu-link">
                            <div class="menu-icon"><i class="bi bi-search nav-icon"></i></div>
                        </a>
                    </div>
                    <div class="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
                            <div class="menu-icon"><i class="bi bi-grid-3x3-gap nav-icon"></i></div>
                        </a>
                        <div class="dropdown-menu fade dropdown-menu-end w-300px text-center p-0 mt-1">
                            <div class="row row-grid gx-0">
                                <div class="col-4">
                                    <a href="email_inbox.html" class="dropdown-item text-decoration-none p-3 bg-none">
                                        <div class="position-relative">
                                            <i class="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                                            <i class="bi bi-envelope h2 opacity-5 d-block my-1"></i>
                                        </div>
                                        <div class="fw-500 fs-10px text-white">INBOX</div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="pos_customer_order.html" target="_blank" class="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i class="bi bi-hdd-network h2 opacity-5 d-block my-1"></i></div>
                                        <div class="fw-500 fs-10px text-white">POS SYSTEM</div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="calendar.html" class="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i class="bi bi-calendar4 h2 opacity-5 d-block my-1"></i></div>
                                        <div class="fw-500 fs-10px text-white">CALENDAR</div>
                                    </a>
                                </div>
                            </div>
                            <div class="row row-grid gx-0">
                                <div class="col-4">
                                    <a href="helper.html" class="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i class="bi bi-terminal h2 opacity-5 d-block my-1"></i></div>
                                        <div class="fw-500 fs-10px text-white">HELPER</div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="settings.html" class="dropdown-item text-decoration-none p-3 bg-none">
                                        <div class="position-relative">
                                            <i class="bi bi-circle-fill position-absolute text-theme top-0 mt-n2 me-n2 fs-6px d-block text-center w-100"></i>
                                            <i class="bi bi-sliders h2 opacity-5 d-block my-1"></i>
                                        </div>
                                        <div class="fw-500 fs-10px text-white">SETTINGS</div>
                                    </a>
                                </div>
                                <div class="col-4">
                                    <a href="widgets.html" class="dropdown-item text-decoration-none p-3 bg-none">
                                        <div><i class="bi bi-collection-play h2 opacity-5 d-block my-1"></i></div>
                                        <div class="fw-500 fs-10px text-white">WIDGETS</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
                            <div class="menu-icon"><i class="bi bi-bell nav-icon"></i></div>
                            <div class="menu-badge bg-theme"></div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end mt-1 w-300px fs-11px pt-1">
                            <h6 class="dropdown-header fs-10px mb-1">NOTIFICATIONS</h6>
                            <div class="dropdown-divider mt-1"></div>
                            <a href="#" class="d-flex align-items-center py-10px dropdown-item text-wrap">
                                <div class="fs-20px">
                                    <i class="bi bi-bag text-theme"></i>
                                </div>
                                <div class="flex-1 flex-wrap ps-3">
                                    <div class="mb-1 text-white">NEW ORDER RECEIVED ($1,299)</div>
                                    <div class="small">JUST NOW</div>
                                </div>
                                <div class="ps-2 fs-16px">
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </a>
                            <a href="#" class="d-flex align-items-center py-10px dropdown-item text-wrap">
                                <div class="fs-20px w-20px">
                                    <i class="bi bi-person-circle text-theme"></i>
                                </div>
                                <div class="flex-1 flex-wrap ps-3">
                                    <div class="mb-1 text-white">3 NEW ACCOUNT CREATED</div>
                                    <div class="small">2 MINUTES AGO</div>
                                </div>
                                <div class="ps-2 fs-16px">
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </a>
                            <a href="#" class="d-flex align-items-center py-10px dropdown-item text-wrap">
                                <div class="fs-20px w-20px">
                                    <i class="bi bi-gear text-theme"></i>
                                </div>
                                <div class="flex-1 flex-wrap ps-3">
                                    <div class="mb-1 text-white">SETUP COMPLETED</div>
                                    <div class="small">3 MINUTES AGO</div>
                                </div>
                                <div class="ps-2 fs-16px">
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </a>
                            <a href="#" class="d-flex align-items-center py-10px dropdown-item text-wrap">
                                <div class="fs-20px w-20px">
                                    <i class="bi bi-grid text-theme"></i>
                                </div>
                                <div class="flex-1 flex-wrap ps-3">
                                    <div class="mb-1 text-white">WIDGET INSTALLATION DONE</div>
                                    <div class="small">5 MINUTES AGO</div>
                                </div>
                                <div class="ps-2 fs-16px">
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </a>
                            <a href="#" class="d-flex align-items-center py-10px dropdown-item text-wrap">
                                <div class="fs-20px w-20px">
                                    <i class="bi bi-credit-card text-theme"></i>
                                </div>
                                <div class="flex-1 flex-wrap ps-3">
                                    <div class="mb-1 text-white">PAYMENT METHOD ENABLED</div>
                                    <div class="small">10 MINUTES AGO</div>
                                </div>
                                <div class="ps-2 fs-16px">
                                    <i class="bi bi-chevron-right"></i>
                                </div>
                            </a>
                            <hr class="bg-white-transparent-5 mb-0 mt-2" />
                            <div class="py-10px mb-n2 text-center">
                                <a href="#" class="text-decoration-none fw-bold">SEE ALL</a>
                            </div>
                        </div>
                    </div>
                    <div class="menu-item dropdown dropdown-mobile-full">
                        <a href="#" data-bs-toggle="dropdown" data-bs-display="static" class="menu-link">
                            <div class="menu-img online">
                                <img src="assets/img/user/profile.jpg" alt="Profile" height="60" />
                            </div>
                            <div class="menu-text d-sm-block d-none"><span class="__cf_email__" data-cfemail="f2878197809c939f97b29391919d879c86dc919d9f">Abdullah</span></div>
                        </a>
                        <div class="dropdown-menu dropdown-menu-end me-lg-3 fs-11px mt-1">
                            <a class="dropdown-item d-flex align-items-center" href="profile.html">PROFILE <i class="bi bi-person-circle ms-auto text-theme fs-16px my-n1"></i></a>
                            <a class="dropdown-item d-flex align-items-center" href="email_inbox.html">INBOX <i class="bi bi-envelope ms-auto text-theme fs-16px my-n1"></i></a>
                            <a class="dropdown-item d-flex align-items-center" href="calendar.html">CALENDAR <i class="bi bi-calendar ms-auto text-theme fs-16px my-n1"></i></a>
                            <a class="dropdown-item d-flex align-items-center" href="settings.html">SETTINGS <i class="bi bi-gear ms-auto text-theme fs-16px my-n1"></i></a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item d-flex align-items-center" href="page_login.html">LOGOUT <i class="bi bi-toggle-off ms-auto text-theme fs-16px my-n1"></i></a>
                        </div>
                    </div>
                </div>


                <form class="menu-search" method="POST" name="header_search_form">
                    <div class="menu-search-container">
                        <div class="menu-search-icon"><i class="bi bi-search"></i></div>
                        <div class="menu-search-input">
                            <input type="text" class="form-control form-control-lg" placeholder="Search menu..." />
                        </div>
                        <div class="menu-search-icon">
                            <a href="#" data-toggle-class="app-header-menu-search-toggled" data-toggle-target=".app"><i class="bi bi-x-lg"></i></a>
                        </div>
                    </div>
                </form>

            </div>


            <div id="sidebar" class="app-sidebar">

                <div class="app-sidebar-content" data-scrollbar="true" data-height="100%">

                    <div class="menu" style={{backgroundColor:'white', marginTop:'10px',marginLeft:'5px',  borderRadius:'15px'}}>
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
                        <div class="menu-item has-sub">
                            <a href="#" class="menu-link">
                                <span class="menu-icon">
                                    <i class="bi bi-envelope"></i>
                                </span>
                                <span class="menu-text">Email</span>
                                <span class="menu-caret"><b class="caret"></b></span>
                            </a>
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="email_inbox.html" class="menu-link">
                                        <span class="menu-text">Inbox</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="email_compose.html" class="menu-link">
                                        <span class="menu-text">Compose</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="email_detail.html" class="menu-link">
                                        <span class="menu-text">Detail</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-header">Components</div>
                        <div class="menu-item">
                            <a href="widgets.html" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-columns-gap"></i></span>
                                <span class="menu-text">Widgets</span>
                            </a>
                        </div>
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
                                <div class="menu-item">
                                    <a href="pos_kitchen_order.html" target="_blank" class="menu-link">
                                        <div class="menu-text">Kitchen Order</div>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="pos_counter_checkout.html" target="_blank" class="menu-link">
                                        <div class="menu-text">Counter Checkout</div>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="pos_table_booking.html" target="_blank" class="menu-link">
                                        <div class="menu-text">Table Booking</div>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="pos_menu_stock.html" target="_blank" class="menu-link">
                                        <div class="menu-text">Menu Stock</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item has-sub">
                            <a href="#" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-controller"></i></span>
                                <span class="menu-text">UI Kits</span>
                                <span class="menu-caret"><b class="caret"></b></span>
                            </a>
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="ui_bootstrap.html" class="menu-link">
                                        <span class="menu-text">Bootstrap</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="ui_buttons.html" class="menu-link">
                                        <span class="menu-text">Buttons</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="ui_card.html" class="menu-link">
                                        <span class="menu-text">Card</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="ui_icons.html" class="menu-link">
                                        <span class="menu-text">Icons</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="ui_modal_notification.html" class="menu-link">
                                        <span class="menu-text">Modal & Notification</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="ui_typography.html" class="menu-link">
                                        <span class="menu-text">Typography</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="ui_tabs_accordions.html" class="menu-link">
                                        <span class="menu-text">Tabs & Accordions</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item has-sub">
                            <a href="#" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-pen"></i></span>
                                <span class="menu-text">Forms</span>
                                <span class="menu-caret"><b class="caret"></b></span>
                            </a>
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="form_elements.html" class="menu-link">
                                        <span class="menu-text">Form Elements</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="form_plugins.html" class="menu-link">
                                        <span class="menu-text">Form Plugins</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="form_wizards.html" class="menu-link">
                                        <span class="menu-text">Wizards</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item has-sub">
                            <a href="#" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-grid-3x3"></i></span>
                                <span class="menu-text">Tables</span>
                                <span class="menu-caret"><b class="caret"></b></span>
                            </a>
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="table_elements.html" class="menu-link">
                                        <span class="menu-text">Table Elements</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="table_plugins.html" class="menu-link">
                                        <span class="menu-text">Table Plugins</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item has-sub">
                            <a href="#" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-pie-chart"></i></span>
                                <span class="menu-text">Charts</span>
                                <span class="menu-caret"><b class="caret"></b></span>
                            </a>
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="chart_js.html" class="menu-link">
                                        <span class="menu-text">Chart.js</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="chart_apex.html" class="menu-link">
                                        <span class="menu-text">Apexcharts.js</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="menu-item">
                            <a href="map.html" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-compass"></i></span>
                                <span class="menu-text">Map</span>
                            </a>
                        </div>
                        <div class="menu-item has-sub">
                            <a href="#" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-layout-sidebar"></i></span>
                                <span class="menu-text">Layout</span>
                                <span class="menu-caret"><b class="caret"></b></span>
                            </a>
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="layout_starter.html" class="menu-link">
                                        <span class="menu-text">Starter Page</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="layout_fixed_footer.html" class="menu-link">
                                        <span class="menu-text">Fixed Footer</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="layout_full_height.html" class="menu-link">
                                        <span class="menu-text">Full Height</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="layout_full_width.html" class="menu-link">
                                        <span class="menu-text">Full Width</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="layout_boxed_layout.html" class="menu-link">
                                        <span class="menu-text">Boxed Layout</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="layout_collapsed_sidebar.html" class="menu-link">
                                        <span class="menu-text">Collapsed Sidebar</span>
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
                            <div class="menu-submenu">
                                <div class="menu-item">
                                    <a href="page_scrum_board.html" class="menu-link">
                                        <span class="menu-text">Scrum Board</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="page_products.html" class="menu-link">
                                        <span class="menu-text">Products</span>
                                    </a>
                                </div>
                                <div class="menu-item active">
                                    <a href="page_orders.html" class="menu-link">
                                        <span class="menu-text">Orders</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="page_gallery.html" class="menu-link">
                                        <span class="menu-text">Gallery</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="page_search_results.html" class="menu-link">
                                        <span class="menu-text">Search Results</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="page_coming_soon.html" class="menu-link">
                                        <span class="menu-text">Coming Soon Page</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="page_404_error.html" class="menu-link">
                                        <span class="menu-text">404 Error Page</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="page_login.html" class="menu-link">
                                        <span class="menu-text">Login</span>
                                    </a>
                                </div>
                                <div class="menu-item">
                                    <a href="page_register.html" class="menu-link">
                                        <span class="menu-text">Register</span>
                                    </a>
                                </div>
                            </div>
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
                            <a href="calendar.html" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-calendar4"></i></span>
                                <span class="menu-text">Calendar</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a href="settings.html" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-gear"></i></span>
                                <span class="menu-text">Settings</span>
                            </a>
                        </div>
                        <div class="menu-item">
                            <a href="helper.html" class="menu-link">
                                <span class="menu-icon"><i class="bi bi-gem"></i></span>
                                <span class="menu-text">Helper</span>
                            </a>
                        </div>
                    </div>

                    <div class="p-3 px-4 mt-auto">
                        <a href="documentation/index.html" target="_blank" class="btn d-block btn-outline-theme">
                            <i class="fa fa-code-branch me-2 ms-n2 opacity-5"></i> Documentation
                        </a>
                    </div>
                </div>

            </div>


            <button class="app-sidebar-mobile-backdrop" data-toggle-target=".app" data-toggle-class="app-sidebar-mobile-toggled"></button>


            <div id="content" class="app-content">
                <div class="d-flex align-items-center mb-3">
                    <div>
                        <ul class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">PAGES</a></li>
                            {/* <li class="breadcrumb-item active">Sales</li> */}
                        </ul>
                        <h1 class="page-header mb-0">Sales</h1>
                    </div>
                    {/* <div class="ms-auto">
                        <a href="#" class="btn btn-outline-theme"><i class="fa fa-plus-circle fa-fw me-1"></i> Create Orders</a>
                    </div> */}
                </div>
                <div class="mb-md-4 mb-3 d-md-flex">
                    <div class="mt-md-0 mt-2"><a href="#" class="text-black  text-opacity-75 text-decoration-none"><i class="fa fa-download fa-fw me-1 text-theme"></i> Export</a></div>
                    <div class="ms-md-4 mt-md-0 mt-2 dropdown-toggle">
                        <a href="#" data-bs-toggle="dropdown" class="text-black text-decoration-none">More Actions</a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Action</a>
                            <a class="dropdown-item" href="#">Another action</a>
                            <a class="dropdown-item" href="#">Something else here</a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Separated link</a>
                        </div>
                    </div>
                </div>
                <div class="card" style={{backgroundColor:'white' , border:'none' , borderRadius:'8px'}} > 
                    <ul class="nav nav-tabs nav-tabs-v2 px-4" >
                        <li class="nav-item me-3"><a href="#allTab" class="nav-link active px-2" data-bs-toggle="tab">Data Range</a>
                            </li>
                        <li class="nav-item me-3"><a href="#publishedTab" class="nav-link px-2" data-bs-toggle="tab">Payment Method</a></li>
                        <li class="nav-item me-3"><a href="#expiredTab" class="nav-link px-2" data-bs-toggle="tab">Staff</a></li>
                        <li class="nav-item me-3"><a href="#deletedTab" class="nav-link px-2" data-bs-toggle="tab">Product</a></li>
                        <li class="nav-item me-3"><a href="#deletedTab" class="nav-link px-2" data-bs-toggle="tab">Sales type</a></li>
                    </ul>
                    <div class="tab-content p-4">
                        <div class="tab-pane fade show active" id="allTab">

                            <div class="input-group mb-4">
                                <div class="flex-fill position-relative">
                                    <div class="input-group">
                                        <input type="text" class="form-control px-35px" placeholder="Filter orders" />
                                        <div class="input-group-text position-absolute top-0 bottom-0 bg-none border-0 start-0" style={{zIndex: "1020"}}>
                                            <i class="fa fa-search opacity-5"></i>
                                        </div>
                                    </div>
                                </div>
                                <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1"/>
                                                        <label class="form-check-label" for="product1"></label> &nbsp;Vat</span><span class="d-inline d-md-none"></span> &nbsp;</button>
                              
                                                        <button class="btn btn-outline-default  rounded-0" type="button"><span class="d-none d-md-inline "> <input type="checkbox" class="form-check-input" id="product1"/>
                                                        <label class="form-check-label" for="product1"></label>&nbsp;Discount</span><span class="d-inline d-md-none"></span> &nbsp;</button>
                               
                            </div>


                            <div class="table-responsive">
                                <table class="table table-hover text-nowrap">
                                    <thead>
                                        <tr  style={{textAlign:'center',}}>
                                            <th class="border-top-0 pt-0 pb-2"></th>
                                            <th class="border-top-0 pt-0 pb-2">Order#</th>
                                            <th class="border-top-0 pt-0 pb-2">Date&Time</th>
                                            <th class="border-top-0 pt-0 pb-2">Staff</th>
                                            <th class="border-top-0 pt-0 pb-2">Payment Method</th>
                                            <th class="border-top-0 pt-0 pb-2"> Sales Type</th>
                                            <th class="border-top-0 pt-0 pb-2">Amount</th>
                                            <th class="border-top-0 pt-0 pb-2">Vat</th>
                                            <th class="border-top-0 pt-0 pb-2">Discount</th>
                                            <th class="border-top-0 pt-0 pb-2">Paid</th>


                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  style={{textAlign:'center'}}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1"/>
                                                        <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0001</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Cash</td>
                                            <td class="py-1 align-middle"><span > Eat in</span></td>
                                            <td class="align-middle"><span> £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>
                                       
                                        <tr  style={{textAlign:'center'}}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1"/>
                                                        <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0002</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span> Deliviero</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr  style={{textAlign:'center'}}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1"/>
                                                        <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0003</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Online</td>
                                            <td class="py-1 align-middle"><span > JustEat</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                        <tr  style={{textAlign:'center'}}>
                                            <td class="w-10px align-middle">
                                                <div class="form-check">
                                                    <input type="checkbox" class="form-check-input" id="product1"/>
                                                        <label class="form-check-label" for="product1"></label>
                                                </div>
                                            </td>
                                            <td class="align-middle" ><a href="#">0004</a></td>
                                            <td class="align-middle">Thu 26 Nov, 12:23pm</td>
                                            <td class="align-middle"> Lee</td>
                                            <td>Card</td>
                                            <td class="py-1 align-middle"><span > Take Away</span></td>
                                            <td class="align-middle"><span > £34.99</span></td>
                                            <td class="align-middle">£0</td>
                                            <td class="align-middle">£2.99</td>
                                            <td class="align-middle">£34.99</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div class="d-md-flex align-items-center" >
                                <div class="me-md-auto text-md-left text-center mb-2 mb-md-0" >
                                    Showing 1 to 10 of 57 entries
                                </div>
                                <ul class="pagination mb-0 justify-content-center" style={{border: '1px solid lightgrey', borderRadius:'10px'}}>
                                    <li class="page-item disabled"><a class="page-link">Previous</a></li>
                                    <li class="page-item"><a class="page-link" href="#" >1</a></li>
                                    <li class="page-item active"><a class="page-link" href="#">2</a></li>
                                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                                    <li class="page-item"><a class="page-link" href="#">4</a></li>
                                    <li class="page-item"><a class="page-link" href="#">5</a></li>
                                    <li class="page-item"><a class="page-link" href="#">6</a></li>
                                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                   
                </div>
            </div>


            <a href="#" data-toggle="scroll-to-top" class="btn-scroll-top fade"><i class="fa fa-arrow-up"></i></a>


            <div class="app-theme-panel">
                <div class="app-theme-panel-container">
                    <a href="javascript:;" data-toggle="theme-panel-expand" class="app-theme-toggle-btn"><i class="bi bi-sliders"></i></a>
                    <div class="app-theme-panel-content">
                        <div class="small fw-bold text-white mb-1">Theme Color</div>
                        <div class="card mb-3">

                            <div class="card-body p-2">

                                <div class="app-theme-list">
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-pink" data-theme-class="theme-pink" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Pink">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-red" data-theme-class="theme-red" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Red">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-warning" data-theme-class="theme-warning" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Orange">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-yellow" data-theme-class="theme-yellow" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Yellow">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-lime" data-theme-class="theme-lime" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Lime">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-green" data-theme-class="theme-green" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Green">&nbsp;</a></div>
                                    <div class="app-theme-list-item active"><a href="javascript:;" class="app-theme-list-link bg-teal" data-theme-class="" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-info" data-theme-class="theme-info" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cyan">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-primary" data-theme-class="theme-primary" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Blue">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-purple" data-theme-class="theme-purple" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Purple">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-indigo" data-theme-class="theme-indigo" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Indigo">&nbsp;</a></div>
                                    <div class="app-theme-list-item"><a href="javascript:;" class="app-theme-list-link bg-gray-100" data-theme-class="theme-gray-200" data-toggle="theme-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Gray">&nbsp;</a></div>
                                </div>

                            </div>


                            <div class="card-arrow">
                                <div class="card-arrow-top-left"></div>
                                <div class="card-arrow-top-right"></div>
                                <div class="card-arrow-bottom-left"></div>
                                <div class="card-arrow-bottom-right"></div>
                            </div>

                        </div>
                        <div class="small fw-bold text-white mb-1">Theme Cover</div>
                        <div class="card">

                            <div class="card-body p-2">

                                <div class="app-theme-cover">
                                    <div class="app-theme-cover-item active">
                                        <a href="javascript:;" class="app-theme-cover-link" style={{backgroundImage: "url(assets/img/cover/cover-thumb-1.jpg)"}} data-theme-cover-class="" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Default">&nbsp;</a>
                                    </div>
                                    <div class="app-theme-cover-item">
                                        <a href="javascript:;" class="app-theme-cover-link"style={{backgroundImage: "url(assets/img/cover/cover-thumb-1.jpg)"}} data-theme-cover-class="bg-cover-2" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 2">&nbsp;</a>
                                    </div>
                                    <div class="app-theme-cover-item">
                                        <a href="javascript:;" class="app-theme-cover-link"style={{backgroundImage: "url(assets/img/cover/cover-thumb-1.jpg)"}} data-theme-cover-class="bg-cover-3" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 3">&nbsp;</a>
                                    </div>
                                    <div class="app-theme-cover-item">
                                        <a href="javascript:;" class="app-theme-cover-link"style={{backgroundImage: "url(assets/img/cover/cover-thumb-1.jpg)"}} data-theme-cover-class="bg-cover-4" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 4">&nbsp;</a>
                                    </div>
                                    <div class="app-theme-cover-item">
                                        <a href="javascript:;" class="app-theme-cover-link" style={{backgroundImage: "url(assets/img/cover/cover-thumb-1.jpg)"}} data-theme-cover-class="bg-cover-5" data-toggle="theme-cover-selector" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-container="body" data-bs-title="Cover 5">&nbsp;</a>
                                    </div>
                                </div>

                            </div>


                            <div class="card-arrow">
                                <div class="card-arrow-top-left"></div>
                                <div class="card-arrow-top-right"></div>
                                <div class="card-arrow-bottom-left"></div>
                                <div class="card-arrow-bottom-right"></div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default SalesReport;
