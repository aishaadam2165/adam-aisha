"use client";
import { useState } from "react";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data
  const projects = [
    {
      id: 1,
      image: "/040.jpg",
      title: "Elegance is not just worn, it is expressed.",
      shortDesc:
        "Every pattern is more than fashion—it is a visual language...",
      fullDesc:
        "Every pattern is more than fashion—it is a visual language, telling stories of culture, tradition, and beauty through design. This project captures the timeless connection between art and identity in every detail.",
    },
    {
      id: 1,
      image: "/121.jpg",
      title: "Elegance is not just worn, it is expressed.",
      shortDesc:
        "Every pattern is more than fashion—it is a visual language...",
      fullDesc:
        "Every pattern is more than fashion—it is a visual language, telling stories of culture, tradition, and beauty through design. This project captures the timeless connection between art and identity in every detail.",
    },
    {
      id: 1,
      image: "/41.jpg",
      title: "Elegance is not just worn, it is expressed.",
      shortDesc:
        "Every pattern is more than fashion—it is a visual language...",
      fullDesc:
        "Every pattern is more than fashion—it is a visual language, telling stories of culture, tradition, and beauty through design. This project captures the timeless connection between art and identity in every detail.",
    },
    {
      id: 1,
      image: "/17.jpg",
      title: "Elegance is not just worn, it is expressed.",
      shortDesc:
        "Every pattern is more than fashion—it is a visual language...",
      fullDesc:
        "Every pattern is more than fashion—it is a visual language, telling stories of culture, tradition, and beauty through design. This project captures the timeless connection between art and identity in every detail.",
    },
    {
      id: 2,
      image: "/fg.jpg",
      title: "Where creativity meets tradition, design comes alive.",
      shortDesc: "Fusion of heritage and modern creativity...",
      fullDesc:
        "This project explores the fusion of heritage and modern creativity. Each design reflects elegance, meaning, and unique identity woven into fabric, creating a modern interpretation of cultural art.",
    },
    {
      id: 3,
      image: "/29.jpg",
      title: "Every pattern tells a story, every fabric carries a voice.",
      shortDesc:
        "Through colors, shapes, and textures, this work highlights...",
      fullDesc:
        "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity, transforming fabrics into expressions of emotion and heritage.",
    },
    {
      id: 3,
      image: "/05.jpg",
      title: "Every pattern tells a story, every fabric carries a voice.",
      shortDesc:
        "Through colors, shapes, and textures, this work highlights...",
      fullDesc:
        "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity, transforming fabrics into expressions of emotion and heritage.",
    },
    {
      id: 3,
      image: "/19.jpg",
      title: "Every pattern tells a story, every fabric carries a voice.",
      shortDesc:
        "Through colors, shapes, and textures, this work highlights...",
      fullDesc:
        "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity, transforming fabrics into expressions of emotion and heritage.",
    },
    {
      id: 3,
      image: "/42.jpg",
      title: "Every pattern tells a story, every fabric carries a voice.",
      shortDesc:
        "Through colors, shapes, and textures, this work highlights...",
      fullDesc:
        "Through colors, shapes, and textures, this work highlights the timeless bond between art and identity, transforming fabrics into expressions of emotion and heritage.",
    },
    {
      id: 4,
      image: "/ring.jpg",
      title: "Gold set with bold bracelet floral design.",
      shortDesc: "Luxury is in every detail, crafted to shine beyond time...",
      fullDesc:
        "Luxury is in every detail, crafted to shine beyond time. This jewelry project emphasizes the elegance of handcrafted beauty with modern precision and traditional artistry.",
    },
    {
      id: 5,
      image: "/hr.jpg",
      title: "Elegant layered jewelry set.",
      shortDesc: "Every jewelry tells a story of grace and timeless beauty...",
      fullDesc:
        "Every jewelry tells a story of grace, strength, and timeless beauty. This design embodies sophistication while honoring cultural craftsmanship passed through generations.",
    },
    {
      id: 6,
      image: "/gold.png",
      title: "Leaf-inspired gold design.",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc:
        "Nature's elegance captured in gold — a symbol of heritage and style. Each curve and detail reflects the inspiration drawn from the organic beauty of leaves and natural patterns.",
    },
    {
      id: 6,
      image: "/4.jpeg",
      title: "Leaf-inspired gold design.",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc:
        "Nature's elegance captured in gold — a symbol of heritage and style. Each curve and detail reflects the inspiration drawn from the organic beauty of leaves and natural patterns.",
    },
    {
      id: 6,
      image: "/111.jpeg",
      title: "Leaf-inspired gold design.",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc:
        "Nature's elegance captured in gold — a symbol of heritage and style. Each curve and detail reflects the inspiration drawn from the organic beauty of leaves and natural patterns.",
    },
    {
      id: 6,
      image: "/1.jpg",
      title: "Leaf-inspired gold design.",
      shortDesc: "Nature's elegance captured in gold...",
      fullDesc:
        "Nature's elegance captured in gold — a symbol of heritage and style. Each curve and detail reflects the inspiration drawn from the organic beauty of leaves and natural patterns.",
    },
  ];

  return (
    <>
      <div className="sectionTitle d-flex flex-row text-light">
        <h3>03.</h3>
        <h4>My Projects</h4>
      </div>

      <div className="row justify-content-center align-items-center text-light">
        {projects.map((project) => (
          <div key={project.id} className="col-lg-4 col-md-6">
            <div className="card rounded-4 h-100 shadow my-4">
              <img
                src={project.image}
                className="card-img-top"
                alt={project.title}
              />
              <div className="card-body">
                <h5 className="fw-bold my-2">{project.title}</h5>
                <p>{project.shortDesc}</p>
                <button
                  className="btn btn-outline-warning w-100"
                  onClick={() => setSelectedProject(project)}
                >
                  More Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ backgroundColor: "rgba(0,0,0,0.7)" }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content bg-dark text-light">
              <div className="modal-header border-0">
                <h5 className="modal-title text-warning">
                  {selectedProject.title}
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={() => setSelectedProject(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="img-fluid w-75 rounded mb-3"
                />
                <p>{selectedProject.fullDesc}</p>
              </div>
              <div className="modal-footer border-0">
                <button
                  className="btn btn-outline-light"
                  onClick={() => setSelectedProject(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
