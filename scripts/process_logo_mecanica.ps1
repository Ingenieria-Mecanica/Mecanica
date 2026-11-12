Add-Type -AssemblyName System.Drawing

$srcPath = "C:\Users\santi\.gemini\antigravity\brain\07545cfb-671f-4433-bc6e-ab89c3d73793\.user_uploaded\media_1794447600317_ac2bf776.jpg"
$bmp = New-Object System.Drawing.Bitmap($srcPath)
$w = $bmp.Width
$h = $bmp.Height

# 1. Save full logo directly
$bmp.Save("img\logo-mecanica.png", [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Save("img\logo-mecanica.jpg", [System.Drawing.Imaging.ImageFormat]::Jpeg)
Write-Host "Full logo saved to img\logo-mecanica.png"

# 2. Extract emblem centered
# Emblem center: (341, 262), emblem height ~420, width ~320
# Let's crop a square region around (341, 262) with size ~460
$cropSize = 460
$cropX = [Math]::Max(0, [int](341 - $cropSize / 2))
$cropY = [Math]::Max(0, [int](262 - $cropSize / 2))

$emblemBmp = New-Object System.Drawing.Bitmap 512, 512
$g = [System.Drawing.Graphics]::FromImage($emblemBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::White)

$srcRect = New-Object System.Drawing.Rectangle $cropX, $cropY, $cropSize, $cropSize
$destRect = New-Object System.Drawing.Rectangle 16, 16, 480, 480
$g.DrawImage($bmp, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)
$g.Dispose()

$emblemBmp.Save("img\logo-mecanica-emblema.png", [System.Drawing.Imaging.ImageFormat]::Png)
$emblemBmp.Save("img\favicon.png", [System.Drawing.Imaging.ImageFormat]::Png)
Write-Host "Emblem and favicon saved."

# 3. App icons
function SaveResized($src, $targetPath, $targetW, $targetH, $padRatio) {
    $targetBmp = New-Object System.Drawing.Bitmap $targetW, $targetH
    $gT = [System.Drawing.Graphics]::FromImage($targetBmp)
    $gT.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $gT.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $gT.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $gT.Clear([System.Drawing.Color]::FromArgb(254, 255, 253)) # #fefffd

    $pad = [int]($targetW * $padRatio)
    $drawW = $targetW - ($pad * 2)
    $drawH = $targetH - ($pad * 2)
    $gT.DrawImage($src, $pad, $pad, $drawW, $drawH)
    $gT.Dispose()
    $targetBmp.Save($targetPath, [System.Drawing.Imaging.ImageFormat]::Png)
    $targetBmp.Dispose()
    Write-Host "Saved $targetPath"
}

SaveResized $emblemBmp "img\app\apple-touch-icon.png" 180 180 0.05
SaveResized $emblemBmp "img\app\icono-192.png" 192 192 0.06
SaveResized $emblemBmp "img\app\icono-512.png" 512 512 0.06
SaveResized $emblemBmp "img\app\icono-maskable-512.png" 512 512 0.15

$emblemBmp.Dispose()
$bmp.Dispose()
Write-Host "All icons generated successfully!"
