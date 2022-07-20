const productController = require("../controllers/product.controller");

module.exports = (app) => {
    app.post("/api/product", productController.createNewProduct);
    app.get("/api/product", productController.getAllProducts);
    app.get("/api/product/:id", productController.getOneProductById);
    app.delete("/api/product/:id", productController.deleteProduct);
    app.put("/api/product/:id", productController.findOneAndUpdate);
};