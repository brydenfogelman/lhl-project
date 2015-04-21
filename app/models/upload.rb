class Upload < CarrierWave::Mount
  mount_uploader :file, MyUploader
end