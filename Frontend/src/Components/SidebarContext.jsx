import  { createContext, useState, useContext,useEffect } from 'react';

const SidebarContext = createContext();

export const SidebarProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (isSidebarOpen && !e.target.closest('.sidebar')) {
                setIsSidebarOpen(false);
            }
            
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarOpen]);

    const closeSidebar = (e) => {
        if (e) {
            e.stopPropagation(); // Prevent the click from bubbling up
            setIsSidebarOpen(!isSidebarOpen);
        } else {
            setIsSidebarOpen(!isSidebarOpen);
        }
    };

    return (
        <SidebarContext.Provider value={{ closeSidebar, isSidebarOpen, setIsSidebarOpen }}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useSidebar = () => useContext(SidebarContext);