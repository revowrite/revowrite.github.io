function runColab() {
  // Get the path to the Colab notebook.
  const colabPath = "/root/notebook.ipynb";

  // Create a new Colab runtime.
  const colab = new google.colab.kernel.Kernel();

  // Connect to the Colab runtime.
  colab.connect();

  // Run the Colab notebook.
  colab.execute(colabPath);
}
