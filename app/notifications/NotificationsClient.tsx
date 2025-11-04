"use client";
import { useState } from "react";
import Image from "next/image";
import { Search, Filter, Download, ZoomIn, Calendar, FileText, Signpost, IdCardIcon } from "lucide-react";

export default function Notifications() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("all");
  
  

  const notifications = [
    {
      id: 1,
      title: "MORA Approval Letter - Page 1",
      description: "Official recognition letter from Ministry of Religious Affairs for Hajj 2026 operations",
      image: "/morap1.jpg",
      type: "official",
      source: "Ministry of Religious Affairs",
      date: "2024-12-15",
      category: "Recognition Letter"
    },
    {
      id: 2,
      title: "MORA Approval Letter - Page 2",
      description: "Continuation of official recognition letter of Ministry of Religiuous Affairs for Hajj 2026",
      image: "/morap2.jpg",
      type: "official",
      source: "Ministry of Religious Affairs",
      date: "2024-12-15",
      category: "Recognition Letter"
    },
    {
      id: 3,
      title: "Hajj Policy Guidelines 2026",
      description: "Comprehensive guidelines and policies for Hajj 2026 operations",
      image: "", // Add more images as needed
      type: "guideline",
      source: "MORA Policy Division",
      date: "2024-11-20",
      category: "Policy"
    },
    {
      id: 4,
      title: "Operator Certification",
      description: "Certification document for approved Hajj operators",
      image: "",
      type: "certificate",
      source: "Hajj Regulatory Authority",
      date: "2024-12-10",
      category: "Certification"
    }
  ];

  const categories = [
    { value: "all", label: "All Notifications" },
    { value: "official", label: "Official Letters" },
    { value: "guideline", label: "Guidelines" },
    { value: "certificate", label: "Certifications" }
  ];

  const filteredNotifications = notifications.filter(notification => {
    const matchesSearch = notification.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notification.source.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === "all" || notification.type === filter;
    return matchesSearch && matchesFilter;
  });

  const downloadImage = (imageUrl: string, title: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = `${title.replace(/\s+/g, '_')}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-4">
            Notifications
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Important letters, approvals, and documents from Ministry of Religious Affairs and other official sources
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <FileText className="w-8 h-8 text-green-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-700">{notifications.length}</div>
            <div className="text-gray-600">Total Documents</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
            <div className="text-2xl font-bold text-blue-700">2026</div>
            <div className="text-gray-600">Hajj Season</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <Signpost className="w-8 h-8 text-amber-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-amber-700">MORA</div>
            <div className="text-gray-600">Primary Source</div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 text-center">
            <IdCardIcon className="w-8 h-8 text-purple-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-700">0413</div>
            <div className="text-gray-600">Registration No.</div>
          </div>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search */}
            <div className="flex-1 w-full">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search notifications, documents, sources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>
            
            {/* Filter */}
            <div className="flex gap-4">
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <select
                  value={filter}
                  onChange={(e) => setFilter(e.target.value)}
                  className="pl-10 pr-8 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-white"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Notifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNotifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-green-100 overflow-hidden"
            >
              {/* Image Container */}
              <div 
                className="relative h-64 bg-gray-100 cursor-pointer group"
                onClick={() => setSelectedImage(notification.image)}
              >
                <Image
                  src={notification.image}
                  alt={notification.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                //   onError={(e) => {
                //     e.currentTarget.src = "/notifications/placeholder-doc.jpg";
                //   }}
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-3">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedImage(notification.image);
                      }}
                      className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                    >
                      <ZoomIn className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        downloadImage(notification.image, notification.title);
                      }}
                      className="bg-white/90 hover:bg-white text-gray-800 p-3 rounded-full transition-all duration-200 transform hover:scale-110"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    notification.category === 'Approval' 
                      ? 'bg-green-100 text-green-800' 
                      : notification.category === 'Policy'
                      ? 'bg-blue-100 text-blue-800'
                      : 'bg-purple-100 text-purple-800'
                  }`}>
                    {notification.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-gray-500 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(notification.date).toLocaleDateString()}
                  </span>
                  <span className="text-sm text-gray-500">{notification.source}</span>
                </div>
                
                <h3 className="text-xl font-bold text-green-800 mb-3 line-clamp-2">
                  {notification.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {notification.description}
                </p>

                <div className="flex justify-between items-center">
                  <button
                    onClick={() => setSelectedImage(notification.image)}
                    className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-semibold transition-colors"
                  >
                    <ZoomIn className="w-4 h-4" />
                    <span>View Full Size</span>
                  </button>
                  
                  <button
                    onClick={() => downloadImage(notification.image, notification.title)}
                    className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    <span className="text-sm">Download</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredNotifications.length === 0 && (
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No notifications found</h3>
            <p className="text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
            >
              <span className="text-2xl">×</span>
            </button>
            <div className="relative w-full h-full">
              <Image
                src={selectedImage}
                alt="Full size document"
                width={800}
                height={1000}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => {
                  const notification = notifications.find(n => n.image === selectedImage);
                  if (notification) {
                    downloadImage(selectedImage, notification.title);
                  }
                }}
                className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center space-x-2"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}